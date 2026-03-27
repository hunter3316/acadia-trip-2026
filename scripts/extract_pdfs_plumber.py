import pdfplumber
import os

pdfs = [
    r"c:\Users\dmsmithphd\OneDrive\Documents\Obsidian\DSmith\Personal\2026 acadia trip\Informatinoal_files\receipt for rvshare main trip 2026.pdf",
    r"c:\Users\dmsmithphd\OneDrive\Documents\Obsidian\DSmith\Personal\2026 acadia trip\Informatinoal_files\RVshare trailer rental acadia trip 2026 email.pdf",
    r"c:\Users\dmsmithphd\OneDrive\Documents\Obsidian\DSmith\Personal\2026 acadia trip\Informatinoal_files\KOA rental acadia 2026.pdf",
    r"c:\Users\dmsmithphd\OneDrive\Documents\Obsidian\DSmith\Personal\2026 acadia trip\Informatinoal_files\insurence for rvshare main trip 2026.pdf"
]

for pdf_path in pdfs:
    try:
        print("Reading", pdf_path)
        text = ""
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                t = page.extract_text()
                if t:
                    text += t + "\n\n"
            
        md_path = pdf_path.replace(".pdf", ".md")
        with open(md_path, "w", encoding="utf-8") as f:
            f.write("# " + os.path.basename(pdf_path) + "\n\n")
            f.write(text)
        print("Wrote to", md_path)
    except Exception as e:
        print(f"Error reading {pdf_path}: {e}")
