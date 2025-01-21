// Problem: Merge overlapping buildings to create a city skyline
#include <stdio.h>
#include <stdlib.h>

struct Point {
    int x, y;
};

struct Skyline {
    struct Point* points;
    int size;
};

struct Skyline mergeSkylines(struct Skyline left, struct Skyline right) {
    struct Skyline merged;
    merged.points = malloc((left.size + right.size) * sizeof(struct Point));
    int h1 = 0, h2 = 0, i = 0, j = 0, k = 0;

    while (i < left.size && j < right.size) {
        if (left.points[i].x < right.points[j].x) {
            int x = left.points[i].x;
            h1 = left.points[i].y;
            int maxH = (h1 > h2) ? h1 : h2;
            merged.points[k++] = (struct Point){x, maxH};
            i++;
        } else {
            int x = right.points[j].x;
            h2 = right.points[j].y;
            int maxH = (h1 > h2) ? h1 : h2;
            merged.points[k++] = (struct Point){x, maxH};
            j++;
        }
    }

    while (i < left.size)
        merged.points[k++] = left.points[i++];
    while (j < right.size)
        merged.points[k++] = right.points[j++];

    merged.size = k;
    return merged;
}

struct Skyline getSkyline(int buildings[][3], int low, int high) {
    if (low == high) {
        struct Skyline result;
        result.points = malloc(2 * sizeof(struct Point));
        result.points[0] = (struct Point){buildings[low][0], buildings[low][2]};
        result.points[1] = (struct Point){buildings[low][1], 0};
        result.size = 2;
        return result;
    }

    int mid = (low + high) / 2;
    struct Skyline left = getSkyline(buildings, low, mid);
    struct Skyline right = getSkyline(buildings, mid + 1, high);

    struct Skyline result = mergeSkylines(left, right);
    free(left.points);
    free(right.points);
    return result;
}

int main() {
    int buildings[][3] = {{2, 9, 10}, {3, 7, 15}, {5, 12, 12}, {15, 20, 10}, {19, 24, 8}};
    int n = sizeof(buildings) / sizeof(buildings[0]);

    struct Skyline result = getSkyline(buildings, 0, n - 1);

    printf("Skyline Points: ");
    for (int i = 0; i < result.size; i++) {
        printf("(%d, %d) ", result.points[i].x, result.points[i].y);
    }
    printf("\n");

    free(result.points);
    return 0;
}
