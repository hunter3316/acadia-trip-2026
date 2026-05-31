import re

# 1. Modify index.html
with open('trip-webapp/index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

with open('checklist_html.txt', 'r', encoding='utf-8') as f:
    checklist_section = f.read()

# Insert tab button
tab_btn_pattern = r'(<button class="tab-btn" data-tab="todo" id="tab-btn-todo">.*?</button>)'
tab_btn_repl = r'\1\n            <button class="tab-btn" data-tab="checklist" id="tab-btn-checklist">📋 Checklist</button>'
html_content = re.sub(tab_btn_pattern, tab_btn_repl, html_content)

# Insert tab panel before tab-todo
panel_pattern = r'(        <section class="tab-panel" id="tab-todo">)'
html_content = html_content.replace('        <section class="tab-panel" id="tab-todo">', checklist_section + '\n        <section class="tab-panel" id="tab-todo">')

with open('trip-webapp/index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)


# 2. Modify script.js
with open('trip-webapp/script.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Make the existing progress bar only count items in #tab-todo
js_content = js_content.replace(
    "const allItems = document.querySelectorAll('.todo-item:not(.completed) .todo-check:not(:disabled)');",
    "const allItems = document.querySelectorAll('#tab-todo .todo-item:not(.completed) .todo-check:not(:disabled)');"
)
js_content = js_content.replace(
    "const allCheckable = document.querySelectorAll('.todo-check:not(:disabled)');",
    "const allCheckable = document.querySelectorAll('#tab-todo .todo-check:not(:disabled)');"
)

# Add Checklist Persistence logic
checklist_js = """

    // ===================== PACKING CHECKLIST PERSISTENCE =====================
    const CHECKLIST_STORAGE_KEY = 'acadia-checklist-state';

    function loadChecklistState() {
        try { return JSON.parse(localStorage.getItem(CHECKLIST_STORAGE_KEY)) || {}; } catch { return {}; }
    }

    function saveChecklistState(state) {
        localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(state));
    }

    const savedChecklistState = loadChecklistState();
    document.querySelectorAll('#tab-checklist .checklist-item[data-id]').forEach(item => {
        const id = item.dataset.id;
        const cb = item.querySelector('.checklist-check');
        if (!cb || cb.disabled) return;
        if (savedChecklistState[id]) {
            cb.checked = true;
            item.classList.add('completed');
        }
        cb.addEventListener('change', () => {
            const state = loadChecklistState();
            state[id] = cb.checked;
            saveChecklistState(state);
            item.classList.toggle('completed', cb.checked);
        });
    });
"""

# Append checklist_js to the end of the file before the countdown or just at the end before "});"
last_brace_idx = js_content.rfind('});')
js_content = js_content[:last_brace_idx] + checklist_js + js_content[last_brace_idx:]

with open('trip-webapp/script.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Injected HTML and JS successfully.")
