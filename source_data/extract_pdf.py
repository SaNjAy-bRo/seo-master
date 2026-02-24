import sys
try:
    from pypdf import PdfReader
    def extract_text(pdf_path):
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text
    
    if __name__ == "__main__":
        path = r"c:\Users\Sanjay Kumar\Documents\seo master\screencapture-seomasterr-2026-02-23-20_25_57.pdf"
        print(extract_text(path))
except ImportError:
    print("pypdf not found")
except Exception as e:
    print(f"Error: {e}")
