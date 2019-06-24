export const priorities = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high'
};

export function getPriorityColor(priority) {
    switch (priority) {
        case priorities.LOW:
            return '#ffff66';
        case priorities.MEDIUM:
            return '#ff9933';
        case priorities.HIGH:
            return '#cc3300';
        default:
            return '#222';
    }
}