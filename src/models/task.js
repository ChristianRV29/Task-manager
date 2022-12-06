const { v4: uuidv4 } = require('uuid');

class Task {
  id = '';
  description = '';
  isCompleted = false;
  createdAt = null;
  completedAt = null;

  constructor(description) {
    this.id = uuidv4();
    this.description = description;
    this.isCompleted = false;
    this.createdAt = new Date();
    this.completedAt = null;
  }
}

module.exports = Task;
