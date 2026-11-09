# Security Specification - Divina Misericórdia

## 1. Data Invariants
- Posts must have a valid title, content, and date.
- Only authenticated users (admins) can create or modify content.
- Public read access is allowed for all content (evangelization goal).
- Document IDs must be sanitized and safe.

## 2. The "Dirty Dozen" Payloads (Denial Tests)
1. **Unauthenticated Write**: Attempting to create a post without `request.auth`.
2. **ID Poisoning**: Creating a post with a 2MB string as ID.
3. **Ghost Field Injection**: Adding `isAdmin: true` to a post document.
4. **Invalid Type**: Sending a number for the `title` field.
5. **Schema Bypass**: Posting a document missing the `date` field.
6. **Date Spoofing**: Setting a `date` in the far future (if restricted, though here it's simple).
7. **Cross-User Injection**: (Not applicable yet as it's admin-only writes).
8. **Malicious Content**: Injecting executable script tags in content (handled by frontend, but rules can restrict size).
9. **Bulk Deletion**: Attempting to delete the entire collection as a guest.
10. **Resource Exhaustion**: Sending a 1MB string in a small field.
11. **Orphaned Writes**: Creating a gallery item with a reference to a non-existent post (if relations existed).
12. **Status Skipping**: Modifying immutable fields like `createdAt` (if implemented).

## 3. Test Runner Concept
The test runner would use `@firebase/rules-unit-testing` to verify that all unauthorized writes are blocked while authorized reads are allowed.
