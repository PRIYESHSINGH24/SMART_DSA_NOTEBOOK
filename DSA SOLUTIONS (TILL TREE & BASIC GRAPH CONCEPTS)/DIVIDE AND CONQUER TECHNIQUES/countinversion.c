// Problem: Find the closest pair of points in a 2D plane using divide and conquer
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

struct Point {
    int x, y;
};

int compareX(const void* a, const void* b) {
    return ((struct Point*)a)->x - ((struct Point*)b)->x;
}

int compareY(const void* a, const void* b) {
    return ((struct Point*)a)->y - ((struct Point*)b)->y;
}

float distance(struct Point p1, struct Point p2) {
    return sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
}

float stripClosest(struct Point strip[], int size, float d) {
    float min = d;
    for (int i = 0; i < size; ++i)
        for (int j = i + 1; j < size && (strip[j].y - strip[i].y) < min; ++j)
            if (distance(strip[i], strip[j]) < min)
                min = distance(strip[i], strip[j]);
    return min;
}

float closestUtil(struct Point points[], int n) {
    if (n <= 3) {
        float min = FLT_MAX;
        for (int i = 0; i < n; ++i)
            for (int j = i + 1; j < n; ++j)
                if (distance(points[i], points[j]) < min)
                    min = distance(points[i], points[j]);
        return min;
    }

    int mid = n / 2;
    struct Point midPoint = points[mid];

    float dl = closestUtil(points, mid);
    float dr = closestUtil(points + mid, n - mid);

    float d = (dl < dr) ? dl : dr;

    struct Point strip[n];
    int j = 0;
    for (int i = 0; i < n; i++)
        if (abs(points[i].x - midPoint.x) < d)
            strip[j] = points[i], j++;

    return (d < stripClosest(strip, j, d)) ? d : stripClosest(strip, j, d);
}

float closest(struct Point points[], int n) {
    qsort(points, n, sizeof(struct Point), compareX);
    return closestUtil(points, n);
}

int main() {
    struct Point points[] = {{2, 3}, {12, 30}, {40, 50}, {5, 1}, {12, 10}, {3, 4}};
    int n = sizeof(points) / sizeof(points[0]);
    printf("The smallest distance is %f\n", closest(points, n));
    return 0;
}
