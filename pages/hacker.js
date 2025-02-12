// Toggle progress popup
const progressButton = document.getElementById("progressButton");
const progressPopup = document.getElementById("progressPopup");
const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");

if (progressButton) {
    progressButton.addEventListener("click", () => {
        progressPopup.classList.add("active");
        popupOverlay.classList.add("active");
    });
}

if (closePopup) {
    closePopup.addEventListener("click", () => {
        progressPopup.classList.remove("active");
        popupOverlay.classList.remove("active");
    });
}

if (popupOverlay) {
    popupOverlay.addEventListener("click", () => {
        progressPopup.classList.remove("active");
        popupOverlay.classList.remove("active");
    });
}

function handleViewSolution(problemTitle) {
    const solutionContent = document.getElementById('solution-content');
    const solutionDisplay = document.querySelector('.solution-display');
    
    solutionDisplay.style.display = 'block'; // Show the solution container when a solution is selected
    
    let solutionText = "";

    switch (problemTitle) {
        case "Two Sum":
            solutionText = `
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">${problemTitle} Solution</h3>
                    </div>
                    <div class="card-content">
                        <p>Given an array of integers, return the indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
                        <div id="ace-editor-two-sum" style="height: 200px;"></div>
                        <p>Time Complexity: O(n)</p>
                        <p>Space Complexity: O(n)</p>
                    </div>
                </div>
            `;
            break;
        case "Reverse Linked List":
            solutionText = `
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">${problemTitle} Solution</h3>
                    </div>
                    <div class="card-content">
                        <p>Given the head of a singly linked list, reverse the list and return its head.</p>
                        <div id="ace-editor-reverse-linked-list" style="height: 200px;"></div>
                        <p>Time Complexity: O(n)</p>
                        <p>Space Complexity: O(1)</p>
                    </div>
                </div>
            `;
            break;
        case "Strings Reversal":
            solutionText = `
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">${problemTitle} Solution</h3>
                    </div>
                    <div class="card-content">
                        <p>Write a function that reverses a string input.</p>
                        <div id="ace-editor-strings-reversal" style="height: 200px;"></div>
                        <p>Time Complexity: O(n)</p>
                        <p>Space Complexity: O(1)</p>
                    </div>
                </div>
            `;
            break;
        default:
            solutionText = `
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Solution</h3>
                    </div>
                    <div class="card-content">
                        <p>No solution available for this problem.</p>
                    </div>
                </div>
            `;
    }

    solutionContent.innerHTML = solutionText;

    // Initialize ACE editor based on the problem title
    let editor;
    switch (problemTitle) {
        case "Two Sum":
            editor = ace.edit("ace-editor-two-sum");
            editor.setTheme("ace/theme/monokai");
            editor.session.setMode("ace/mode/javascript");
            editor.setValue(`function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}`);
            break;
        case "Strings Reversal":
            editor = ace.edit("ace-editor-strings-reversal");
            editor.setTheme("ace/theme/monokai");
            editor.session.setMode("ace/mode/javascript");
            editor.setValue(`function reverseString(str) {
    return str.split('').reverse().join('');
}`);
            break;
    }
}
