
const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "employee1@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design",
                "taskDate": "2026-07-09",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2026-07-09",
                "category": "Meeting"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in issue tracker",
                "taskDate": "2026-07-09",
                "category": "Development"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Database optimization",
                "taskDescription": "Optimize queries for better performance",
                "taskDate": "2026-07-09",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2026-07-09",
                "category": "Design"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ravi",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare presentation",
                "taskDescription": "Prepare slides for upcoming client presentation",
                "taskDate": "2026-07-09",
                "category": "Presentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase for optimization",
                "taskDate": "2026-07-09",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Testing",
                "taskDescription": "Test the latest build for bugs",
                "taskDate": "2026-07-09",
                "category": "QA"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write documentation",
                "taskDescription": "Update the project documentation",
                "taskDate": "2026-07-09",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Set up CI/CD",
                "taskDescription": "Implement continuous integration pipeline",
                "taskDate": "2026-07-09",
                "category": "DevOps"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Karan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "UI redesign",
                "taskDescription": "Redesign the user interface for better UX",
                "taskDate": "2026-07-09",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy new build",
                "taskDescription": "Deploy the latest build to production",
                "taskDate": "2026-07-09",
                "category": "DevOps"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback from clients after product launch",
                "taskDate": "2026-07-09",
                "category": "Support"
            }
        ]
    },
    {
        "id": 6,
        "firstName": "Maya",
        "email": "employee6@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Research new tools",
                "taskDescription": "Evaluate tools for the next sprint",
                "taskDate": "2026-07-09",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team sync",
                "taskDescription": "Lead the weekly team sync meeting",
                "taskDate": "2026-07-09",
                "category": "Management"
            }
        ]
    },
    {
        "id": 7,
        "firstName": "Anil",
        "email": "employee7@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create API docs",
                "taskDescription": "Document backend API endpoints",
                "taskDate": "2026-07-09",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 8,
        "firstName": "Suman",
        "email": "employee8@example.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 2,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Plan sprint backlog",
                "taskDescription": "Define sprint backlog items for next cycle",
                "taskDate": "2026-07-09",
                "category": "Planning"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write test cases",
                "taskDescription": "Create test cases for the new module",
                "taskDate": "2026-07-09",
                "category": "QA"
            }
        ]
    },
    {
        "id": 9,
        "firstName": "Nisha",
        "email": "employee9@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Test automation",
                "taskDescription": "Build automated tests for regression coverage",
                "taskDate": "2026-07-09",
                "category": "QA"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Release review",
                "taskDescription": "Review the release checklist before deployment",
                "taskDate": "2026-07-09",
                "category": "Release"
            }
        ]
    },
    {
        "id": 10,
        "firstName": "Rohan",
        "email": "employee10@example.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design system update",
                "taskDescription": "Update the design system with new components",
                "taskDate": "2026-07-09",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Performance audit",
                "taskDescription": "Audit current app performance metrics",
                "taskDate": "2026-07-09",
                "category": "Performance"
            }
        ]
    },
    {
        "id": 11,
        "firstName": "Deepa",
        "email": "employee11@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Integrate payment gateway",
                "taskDescription": "Connect the payment gateway with checkout",
                "taskDate": "2026-07-09",
                "category": "Integration"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Fix mobile layout",
                "taskDescription": "Resolve broken styles in the mobile view",
                "taskDate": "2026-07-09",
                "category": "UI"
            }
        ]
    },
    {
        "id": 12,
        "firstName": "Amit",
        "email": "employee12@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Security audit",
                "taskDescription": "Perform a security review of core systems",
                "taskDate": "2026-07-09",
                "category": "Security"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Optimize images",
                "taskDescription": "Compress and lazy-load all hero images",
                "taskDate": "2026-07-09",
                "category": "Performance"
            }
        ]
    },
    {
        "id": 13,
        "firstName": "Sonam",
        "email": "employee13@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Content update",
                "taskDescription": "Refresh the marketing copy across the site",
                "taskDate": "2026-07-09",
                "category": "Content"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update headers",
                "taskDescription": "Create new header styles for the dashboard",
                "taskDate": "2026-07-09",
                "category": "Design"
            }
        ]
    },
    {
        "id": 14,
        "firstName": "Vikram",
        "email": "employee14@example.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Review analytics",
                "taskDescription": "Analyze usage reports from last week",
                "taskDate": "2026-07-09",
                "category": "Analytics"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Debug signup flow",
                "taskDescription": "Fix issues in user registration",
                "taskDate": "2026-07-09",
                "category": "Development"
            }
        ]
    },
    {
        "id": 15,
        "firstName": "Tina",
        "email": "employee15@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "UX testing",
                "taskDescription": "Conduct usability tests on the new flow",
                "taskDate": "2026-07-09",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Deploy rollback",
                "taskDescription": "Rollback failed release and restore stable state",
                "taskDate": "2026-07-09",
                "category": "Operations"
            }
        ]
    },
    {
        "id": 16,
        "firstName": "Neha",
        "email": "employee16@example.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 2,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Organize backlog",
                "taskDescription": "Clean up and prioritize backlog items",
                "taskDate": "2026-07-09",
                "category": "Planning"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design review",
                "taskDescription": "Review new interface proposals with the team",
                "taskDate": "2026-07-09",
                "category": "Design"
            }
        ]
    },
    {
        "id": 17,
        "firstName": "Sameer",
        "email": "employee17@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Create dashboard mockups",
                "taskDescription": "Build mockups for the next dashboard release",
                "taskDate": "2026-07-09",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update dependencies",
                "taskDescription": "Upgrade project dependencies to latest stable versions",
                "taskDate": "2026-07-09",
                "category": "Development"
            }
        ]
    },
    {
        "id": 18,
        "firstName": "Kavya",
        "email": "employee18@example.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Customer survey",
                "taskDescription": "Create and send the customer satisfaction survey",
                "taskDate": "2026-07-09",
                "category": "Support"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Performance report",
                "taskDescription": "Compile performance metrics for the team",
                "taskDate": "2026-07-09",
                "category": "Analytics"
            }
        ]
    },
    {
        "id": 19,
        "firstName": "Raj",
        "email": "employee19@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Mobile app bugfix",
                "taskDescription": "Fix issues in the mobile app checkout flow",
                "taskDate": "2026-07-09",
                "category": "Mobile"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Failed deployment",
                "taskDescription": "Investigate the failed staging deployment",
                "taskDate": "2026-07-09",
                "category": "Ops"
            }
        ]
    },
    {
        "id": 20,
        "firstName": "Meera",
        "email": "employee20@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Accessibility review",
                "taskDescription": "Improve accessibility for the dashboard views",
                "taskDate": "2026-07-09",
                "category": "Accessibility"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Front-end polish",
                "taskDescription": "Polish UI interactions and animations",
                "taskDate": "2026-07-09",
                "category": "Design"
            }
        ]
    },
    {
        "id": 21,
        "firstName": "Saiyaaj",
        "email": "saiyajkhan786s@gmail.com",
        "password": "Saiyaaj@23",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Review EMS dashboards",
                "taskDescription": "Review the updated admin and employee dashboard experience.",
                "taskDate": "2026-07-09",
                "category": "Review"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Refine project metrics",
                "taskDescription": "Polish the dashboard metrics and improve KPI visibility.",
                "taskDate": "2026-07-09",
                "category": "Analytics"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Clean component styling",
                "taskDescription": "Tune UI spacing and theme consistency across pages.",
                "taskDate": "2026-07-09",
                "category": "Frontend"
            }
        ]
    }
];

const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {
        employees: Array.isArray(employees) ? employees : [],
        admin: Array.isArray(admin) ? admin : [],
    }
}
