#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <stdlib.h>

typedef struct {
    int start;
    int end;
} Course;

int compare(const void *a, const void *b) {
    Course *c1 = (Course *)a;
    Course *c2 = (Course *)b;
    return c1->end - c2->end;
}

int scheduleCourse(int** courses, int coursesSize, int* coursesColSize) {
    Course courseArr[coursesSize];
    for (int i = 0; i < coursesSize; i++) {
        courseArr[i].start = courses[i][0];
        courseArr[i].end = courses[i][1];
    }
    
    qsort(courseArr, coursesSize, sizeof(Course), compare);
    
    int maxCourses = 0, totalTime = 0;
    
    for (int i = 0; i < coursesSize; i++) {
        if (totalTime + courseArr[i].start <= courseArr[i].end) {
            totalTime += courseArr[i].start;
            maxCourses++;
        }
    }
    
    return maxCourses;
}

int main() {
    int courses[4][2] = {{100, 200}, {200, 1300}, {1000, 1250}, {2000, 3200}};
    int coursesSize = 4;
    int coursesColSize = 2;
    
    int* coursesArr[coursesSize];
    for (int i = 0; i < coursesSize; i++) {
        coursesArr[i] = courses[i];
    }
    
    printf("Maximum number of courses that can be taken: %d\n", scheduleCourse(coursesArr, coursesSize, &coursesColSize));
    return 0;
}
