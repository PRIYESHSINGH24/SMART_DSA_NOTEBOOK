function handleViewSolution(problemTitle) {
    const solutionContent = document.getElementById('solution-content');

    let solutionText = "";


    if (problemTitle === "Two Sum") {
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
    } else if (problemTitle === "Reverse Linked List") {
        solutionText = `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${problemTitle} Solution</h3>
                </div>
                <div class="card-content">
                    <p>Given the head of a singly linked list, reverse the list and return its head.</p>
                    <div id="ace-editor-reverse-list" style="height: 200px;"></div>
                    <p>Time Complexity: O(n)</p>
                    <p>Space Complexity: O(1)</p>
                </div>
            </div>
        `;
    } else if (problemTitle === "Binary Tree Level Order Traversal") {
        solutionText = `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${problemTitle} Solution</h3>
                </div>
                <div class="card-content">
                    <p>Given the root of a binary tree, return the level order traversal of its nodes' values.</p>
                    <div id="ace-editor-level-order" style="height: 200px;"></div>
                    <p>Time Complexity: O(n)</p>
                    <p>Space Complexity: O(n)</p>
                </div>
            </div>
        `;
    } else {
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


    if (problemTitle === "Two Sum") {
        var editor = ace.edit("ace-editor-two-sum");
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
    } else if (problemTitle === "Reverse Linked List") {
        var editor = ace.edit("ace-editor-reverse-list");
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/javascript");
        editor.setValue(`function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}`);
    } else if (problemTitle === "Binary Tree Level Order Traversal") {
        var editor = ace.edit("ace-editor-level-order");
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/javascript");
        editor.setValue(`function levelOrder(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
        let levelSize = queue.length;
        let level = [];
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}`);
    }
}

const cursor = document.querySelector("#cursor");
const body = document.querySelector("body");

body.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
        x: e.x,
        y: e.y
    })
})
