// Toggle progress popup
const progressButton = document.getElementById("progressButton");
const progressPopup = document.getElementById("progressPopup");
const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");

progressButton.addEventListener("click", () => {
  progressPopup.classList.add("active");
  popupOverlay.classList.add("active");
});

closePopup.addEventListener("click", () => {
  progressPopup.classList.remove("active");
  popupOverlay.classList.remove("active");
});

popupOverlay.addEventListener("click", () => {
  progressPopup.classList.remove("active");
  popupOverlay.classList.remove("active");
});

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
                    <div id="ace-editor-reverse-linked-list" style="height: 200px;"></div>
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
                    <div id="ace-editor-binary-tree" style="height: 200px;"></div>
                    <p>Time Complexity: O(n)</p>
                    <p>Space Complexity: O(n)</p>
                </div>
            </div>
        `;
    } else if (problemTitle === "ascll Function") {
        solutionText = `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${problemTitle} Solution</h3>
                </div>
                <div class="card-content">
                    <p>ascll Function</p>
                    <div id="ace-editor-ascll-Function" style="height: 200px;"></div>
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
        var editor = ace.edit("ace-editor-reverse-linked-list");
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
        var editor = ace.edit("ace-editor-binary-tree");
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
    }  else if (problemTitle === "ascll Function") {
        var editor = ace.edit("ace-editor-ascll-Function");
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/javascript");
        editor.setValue(`#include <stdio.h>
#include <stdlib.h>

typedef struct node {
    int data;
    struct node *next;
} node;

void createnode(node **head) {
    int data;
    node* newnode = (node*)malloc(sizeof(node));

    printf("Enter value: ");
    scanf("%d", &data);
    newnode->data = data;
    newnode->next = NULL;

    if (*head == NULL) {
        *head = newnode;
    } else {
        newnode->next = *head;
        *head = newnode;
    }
}
void ascll(node **head) {
    if (*head == NULL) {
        printf("Empty list\n");
        return;
    }

    node *p = *head;
    node *q = NULL;
    int temp;

    // Bubble sort for linked list (Improved swapping logic)
    while (p != NULL) {
        q = p->next;
        while (q != NULL) {
            if (p->data > q->data) {
                // Swap data between p and q
                temp = p->data;
                p->data = q->data;
                q->data = temp;
            }
            q = q->next;
        }
        p = p->next;
    }
}

void printll(node *head) {
    if (head == NULL) {
        printf("Empty list\n");
    } else {
        while (head != NULL) {
            printf("%d ", head->data);
            head = head->next;
        }
        printf("\n");
    }
}

int main() {
    int num = 1;
    node *head = NULL;

    while (num) {
        createnode(&head);
        printf("Want to insert more? Type 1 for yes, 0 for no: ");
        scanf("%d", &num);
    }

    ascll(&head);
    printll(head);

    return 0;
}
`);
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