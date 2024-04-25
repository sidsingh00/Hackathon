import os

def list_images(directory):
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif']
    image_files = []

    for root, dirs, files in os.walk(directory):
        for file in files:
            if any(file.lower().endswith(ext) for ext in image_extensions):
                image_files.append(file)

    return image_files

directory_path = 'imagename.txt'  # Replace with your directory path
image_files = list_images(directory_path)

for image_file in image_files:
    print(image_file)
