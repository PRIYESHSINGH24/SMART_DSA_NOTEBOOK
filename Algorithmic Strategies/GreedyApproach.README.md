# <div align="Center">Greedy Approach</div>

### The greedy approach in programming refers to making the locally optimal choice at each step with the hope of finding a global optimum. This approach is efficient and often works for optimization problems.
<hr>

### For Example :

## Activity Selection Problem
```
#include <stdio.h>
#include <stdlib.h>

// A structure to represent an activity
typedef struct {
    int start;
    int end;
} Activity;

// Comparison function to sort activities by their finishing times
int compare(const void *a, const void *b) {
    Activity *activityA = (Activity *)a;
    Activity *activityB = (Activity *)b;
    return activityA->end - activityB->end;
}

void activitySelection(Activity activities[], int n) {
    qsort(activities, n, sizeof(Activity), compare);

    printf("Selected activities are:\n");

    int lastEnd = 0; // End time of the last selected activity

    for (int i = 0; i < n; i++) {
        if (activities[i].start >= lastEnd) {
            printf("Activity (Start: %d, End: %d)\n", activities[i].start, activities[i].end);
            lastEnd = activities[i].end;
        }
    }
}

int main() {
    Activity activities[] = {{1, 2}, {3, 4}, {0, 6}, {5, 7}, {8, 9}, {5, 9}};
    int n = sizeof(activities) / sizeof(activities[0]);

    activitySelection(activities, n);

    return 0;
}
```
