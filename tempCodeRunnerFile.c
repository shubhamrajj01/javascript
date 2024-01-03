#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* deleteDuplicates(struct ListNode* head) {
    if (head == NULL || head->next == NULL) {
        return head;
    }
    
    struct ListNode dummy;
    dummy.next = head;
    struct ListNode* prev = &dummy;
    struct ListNode* current = head;
    
    while (current != NULL) {
        while (current->next != NULL && current->val == current->next->val) {
            struct ListNode* duplicate = current->next;
            current->next = current->next->next;
            free(duplicate);
        }
        if (prev->next == current) {
            prev = prev->next;
        } else {
            prev->next = current->next;
        }
        current = current->next;
    }
    
    return dummy.next;
}

// Function to create a new node
struct ListNode* newNode(int val) {
    struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));
    node->val = val;
    node->next = NULL;
    return node;
}

// Function to print the linked list
void printList(struct ListNode* head) {
    struct ListNode* current = head;
    while (current != NULL) {
        printf("%d -> ", current->val);
        current = current->next;
    }
    printf("NULL\n");
}

int main() {
    // Creating the input linked list: 1 -> 1 -> 1 -> 2 -> 2 -> 3 -> 44
    struct ListNode* head = newNode(1);
    head->next = newNode(1);
    head->next->next = newNode(1);
    head->next->next->next = newNode(2);
    head->next->next->next->next = newNode(2);
    head->next->next->next->next->next = newNode(3);
    head->next->next->next->next->next->next = newNode(44);

    printf("Original List: ");
    printList(head);

    // Deleting duplicates
    head = deleteDuplicates(head);

    printf("List after removing duplicates: ");
    printList(head);

    // Freeing memory allocated for the linked list
    // FreeList implementation is skipped here for brevity

    return 0;
}
