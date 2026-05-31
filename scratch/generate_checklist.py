html = '''        <!-- ===================== TAB: CHECKLIST ===================== -->
        <section class="tab-panel" id="tab-checklist">
            <div class="content-section">
                <div class="section-header">
                    <h2>📋 Trip Packing Checklist</h2>
                    <p>Family packing list. Progress saves automatically.</p>
                </div>
'''

global_categories = {
    'Linens': ['Sheets', 'Blanket', 'Sleeping Bag?', 'Pillow', 'Towels', 'Wash Cloth ?'],
    'Toiletries': ['Shampoo', 'Conditioner', 'Tooth Paste', 'Brush', 'Deodorant', 'CPAP', 'Bonine', 'Dog Diapers'],
    'Kitchen (Purchase Food in Vermont)': ['Dish Soap', 'Ziploc Bags', 'Paper towels', 'Tin foil', 'Paper Plates', 'Plasticwear', 'Water bottles', 'Buffalo Trace K Cups', 'Camping Bin (thermometer)', 'Leatherman', 'Cooler ?'],
    'Other': ['Camping Chairs', 'Flash lights', 'Jackery', 'Games small']
}

person_categories = {
    'Clothes (Layers)': ['Swim Wear', 'Light Coat', 'Water Shoes', 'Hiking boots', 'Sneakers', 'Backpacks', 'Water Pack', 'Underwear', 'Socks', 'Shorts', 'Pants', 'Shirts', 'Hats'],
    'Electronics': ['Kindle', 'Head Phones', 'Computer', 'Phone', 'Charging (usb etc.)', 'Camera Gear']
}

people = ['David', 'Erica', 'Weston', 'Morgan', 'Colton', 'Paityn']

# Global Section
html += '                <div class="todo-section">\n                    <div class="todo-section-header medium">\n                        <h3>🌍 Family / Shared Items</h3>\n                    </div>\n'

for cat, items in global_categories.items():
    html += f'                    <h4 style="margin: 20px 0 10px; color: #a4c8e1;">{cat}</h4>\n'
    html += '                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px;">\n'
    for item in items:
        safe_id = f'global-{cat.lower()[:4]}-{item.lower().replace(" ", "").replace("?", "")}'
        html += f'''                        <label class="todo-item checklist-item" data-id="{safe_id}" style="margin-bottom: 0; padding: 10px;">
                            <input type="checkbox" class="checklist-check">
                            <div class="todo-body"><strong>{item}</strong></div>
                        </label>\n'''
    html += '                    </div>\n'

html += '                </div>\n'

# Individual Section
html += '                <div class="todo-section" style="margin-top: 40px;">\n                    <div class="todo-section-header urgent">\n                        <h3>🎒 Individual Packing</h3>\n                    </div>\n'

for person in people:
    html += f'                    <details class="person-details" style="margin-bottom: 15px; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 15px; border: 1px solid rgba(255,255,255,0.05);">\n'
    html += f'                        <summary style="font-size: 1.2rem; font-weight: 600; cursor: pointer; color: white;">👤 {person}</summary>\n'
    
    for cat, items in person_categories.items():
        html += f'                        <h4 style="margin: 15px 0 10px; color: #a4c8e1;">{cat}</h4>\n'
        html += '                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px;">\n'
        for item in items:
            safe_id = f'indiv-{person.lower()}-{cat.lower()[:4]}-{item.lower().replace(" ", "").replace("?", "").replace("(", "").replace(")", "")}'
            html += f'''                            <label class="todo-item checklist-item" data-id="{safe_id}" style="margin-bottom: 0; padding: 10px;">
                                <input type="checkbox" class="checklist-check">
                                <div class="todo-body"><strong>{item}</strong></div>
                            </label>\n'''
        html += '                        </div>\n'
    html += '                    </details>\n'

html += '                </div>\n            </div>\n        </section>\n'

with open('checklist_html.txt', 'w', encoding='utf-8') as f:
    f.write(html)
