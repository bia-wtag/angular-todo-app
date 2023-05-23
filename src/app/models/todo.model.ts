export class Todo {
  constructor(
    private createdAt: Date,
    private completedAt: Date | null = null,
    private title: string,
    private isComplete: boolean
  ) {}

  getCreatedAt() {
    return this.createdAt;
  }
  getCompletedAt() {
    return this.completedAt;
  }
  getTitle() {
    return this.title;
  }
  getIsComplete() {
    return this.isComplete;
  }
}
