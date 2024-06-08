# Interactive Photo Gallery
This project creates a dynamic and interactive image gallery grid using HTML, CSS, and JavaScript. The gallery displays a set of images with a hover effect that blurs the image and shows additional information.

## Getting Started

To get a local copy of this project up and running on your machine, follow the installation instructions below.

## Prerequisites

You need a web browser to view the gallery.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/kezagiselle/TaskForce_Challenge.git
    ```

2. **Navigate to the project directory:**

    ```bash
    open file explorer then open the project folder then run the Index.html on a web browser
    ```
## Usage

When you open `index.html` in your web browser, you'll see a grid of images. Hover over any image to see the blur effect and additional information about the image.

### My approach on the Photo Gallery Website

1. Create the Folder Structure:
   - I started by organizing the project files. Inside the Photo-gallery folder, I created subfolders for Assets containing other subfolders for Fonts, Images, and Styles. Then also added subfolder for Javascript
   in the Photo-gallery directory.

2. Set Up HTML Structure:
   - Next, I crafted the HTML layout for the website, adding all necessary HTML elements with their corresponding classes and IDs for easy styling and scripting.

3. Add CSS Styles:
   - I wrote the CSS rules for the HTML elements in a separate CSS file. The styling was initially designed with a mobile-first approach and later adjusted for desktop devices.

4. Create Image Data in JavaScript:
   - I then used JavaScript to create an array of objects, each containing information about the images such as name and location.

5. Integrate JavaScript with HTML:
   - Using JavaScript, I dynamically passed the image data to the HTML elements. I then populated the gallery container by setting its innerHTML with the new HTML elements.

### Challenges
This project contains two JavaScript functions for different coding challenges. The first function, `transformString`, transforms a string based on its length. The second function, `hasContiguousSubarrayWithSum`, checks if there is a contiguous subarray within a given array that sums up to a target value.

 **Navigate to the project directory:**

    ```bash
    cd TaskForce_Challenge\Challenges
    ```

3. **Run the JavaScript file:**

    You can use Node.js to run the JavaScript file containing the functions.

    ```bash
    node .\arrayMap.js
    node .\stringTransform.js
    ```
