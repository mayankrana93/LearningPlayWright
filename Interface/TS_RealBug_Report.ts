interface BugReport {
    id: number;
    summary: string;
    description: string;
    priority: number;
    severity: string;
    stepsToReplicate: string[];
}

function logBug(data: BugReport): void {
    console.log("Bug id" + data.id + "Bug summary is " + data.summary + "Bug descriotion " + data.description + "Bug Priority: " + data.priority + "Steps to replicate: ");
    for (let i = 0; i < data.stepsToReplicate.length; i++) {
        console.log((i + 1) + "" + data.stepsToReplicate[i]);

    }

}

logBug(
    {
        id: 1,
        summary: "Login not working",
        description: "Error message showing up after clicking on Login button",
        priority: 2,
        severity: "3",
        stepsToReplicate: ["Login", "Enter username", "Enter password", "Click on login button"]
    }
);