import React from "react";
import BannerLeft from "../components/Courses/BannerLeft";
// import BannerVideo from "../components/Courses/BannerVideo"
import Faq from '../components/Courses/Faq'

const DevopsC = () => {
   const moduleData = [
  {
    module: "Module 1: Introduction to DevOps",
    questions: [
      {
        question: "Understanding DevOps Culture",
        descriptions: [
          {
            description: "Core Concepts",
            answers: ["People, Process, Tools"],
          },
        ],
      },
      {
        question: "Evolution of DevOps",
        descriptions: [
          {
            description: "Development Lifecycle",
            answers: ["Traditional", "Agile", "DevOps"],
          },
        ],
      },
      {
        question: "Benefits and Practices",
        descriptions: [
          {
            description: "Why DevOps?",
            answers: ["Improved collaboration", "Faster delivery", "Automation"],
          },
        ],
      },
      {
        question: "Overview of Key Concepts",
        descriptions: [
          {
            description: "Foundational Tools and Practices",
            answers: ["CI/CD", "Infrastructure as Code (IAC)", "Monitoring"],
          },
        ],
      },
    ],
  },
  {
    module: "Module 2: DevOps with Docker",
    questions: [
      {
        question: "Installing and Configuring Docker",
        descriptions: [
          {
            description: "Getting Started with Docker",
            answers: ["Installation steps", "Initial configuration"],
          },
        ],
      },
      {
        question: "Docker Architecture and Components",
        descriptions: [
          {
            description: "Core Concepts",
            answers: ["Docker Engine", "Images", "Containers", "Docker CLI"],
          },
        ],
      },
      {
        question: "Building and Running Docker Images",
        descriptions: [
          {
            description: "Sample Applications",
            answers: ["Python", "JavaScript", "Java"],
          },
          {
            description: "Microservices Examples",
            answers: ["Currency Exchange", "Currency Conversion"],
          },
        ],
      },
      {
        question: "Docker Networking, Volumes, and Compose",
        descriptions: [
          {
            description: "Container Management",
            answers: ["Custom networks", "Volume mounts", "Docker Compose files"],
          },
        ],
      },
      {
        question: "Optimizing Docker Usage",
        descriptions: [
          {
            description: "Image Efficiency",
            answers: ["Optimizing Dockerfiles", "Layer caching techniques"],
          },
        ],
      },
      {
        question: "Docker Hub and Image Management",
        descriptions: [
          {
            description: "Remote Repositories",
            answers: ["Pushing/pulling images", "Tagging", "Versioning"],
          },
        ],
      },
    ],
  },
  {
    module: "Module 3: DevOps with Kubernetes (AWS EKS)",
    questions: [
      {
        question: "Introduction to Kubernetes",
        descriptions: [
          {
            description: "Kubernetes Basics",
            answers: ["Container orchestration", "Why Kubernetes?"],
          },
        ],
      },
      {
        question: "Creating EKS Clusters using Terraform",
        descriptions: [
          {
            description: "Infrastructure as Code",
            answers: ["Automated EKS provisioning with Terraform"],
          },
        ],
      },
      {
        question: "Kubernetes Core Concepts",
        descriptions: [
          {
            description: "Essential Objects",
            answers: ["Pods", "ReplicaSets", "Deployments", "Services"],
          },
        ],
      },
      {
        question: "Deploying Microservices to EKS",
        descriptions: [
          {
            description: "End-to-End Deployment",
            answers: ["Dockerized services on EKS"],
          },
        ],
      },
      {
        question: "Advanced Kubernetes Features",
        descriptions: [
          {
            description: "Configuration & Networking",
            answers: ["Ingress", "ConfigMaps", "Secrets", "Load Balancing"],
          },
          {
            description: "Deployment Strategies",
            answers: ["Service Discovery", "Rolling Updates"],
          },
        ],
      },
    ],
  },
  {
    module: "Module 4: Infrastructure as Code with Terraform",
    questions: [
      {
        question: "Introduction to IAC and Terraform",
        descriptions: [
          {
            description: "IAC Principles",
            answers: ["Declarative syntax", "Reproducibility", "Version control"],
          },
        ],
      },
      {
        question: "Installing Terraform and AWS CLI",
        descriptions: [
          {
            description: "Environment Setup",
            answers: ["Installation steps", "Configuration"],
          },
        ],
      },
      {
        question: "Creating AWS Resources",
        descriptions: [
          {
            description: "Compute and Networking",
            answers: ["EC2", "VPC", "Subnets", "Load Balancers"],
          },
          {
            description: "Storage and IAM",
            answers: ["IAM Users", "S3 Buckets"],
          },
        ],
      },
      {
        question: "Terraform Management Concepts",
        descriptions: [
          {
            description: "Reusability and State",
            answers: [
              "Terraform Variables",
              "State Management",
              "Remote Backend",
            ],
          },
        ],
      },
      {
        question: "Terraform Workspaces and Modules",
        descriptions: [
          {
            description: "Scalable Design",
            answers: ["Workspaces", "Modules", "Environments"],
          },
        ],
      },
      {
        question: "Creating EKS Clusters using Terraform",
        descriptions: [
          {
            description: "Hands-on Deployment",
            answers: ["EKS provisioning via modules"],
          },
        ],
      },
    ],
  },
  {
    module: "Module 5: Configuration Management with Ansible",
    questions: [
      {
        question: "Introduction to Ansible",
        descriptions: [
          {
            description: "Automation Overview",
            answers: ["Use cases", "Agentless architecture"],
          },
        ],
      },
      {
        question: "Ansible Architecture",
        descriptions: [
          {
            description: "Core Components",
            answers: ["Control Node", "Inventory", "Playbooks"],
          },
        ],
      },
      {
        question: "Running Commands and Modules",
        descriptions: [
          {
            description: "Ad-Hoc Tasks",
            answers: ["ansible", "ansible-playbook", "Modules overview"],
          },
        ],
      },
      {
        question: "Writing Playbooks",
        descriptions: [
          {
            description: "Automation Scripts",
            answers: [
              "Managing EC2",
              "Apache Installation",
              "Shell Scripts",
            ],
          },
        ],
      },
      {
        question: "Ansible Features",
        descriptions: [
          {
            description: "Programming Logic",
            answers: ["Variables", "Loops", "Conditionals"],
          },
        ],
      },
      {
        question: "Advanced Inventory and Configuration",
        descriptions: [
          {
            description: "Scalability",
            answers: ["EC2 Dynamic Inventory", "Declarative Configuration"],
          },
        ],
      },
    ],
  },
  {
    module: "Module 6: CI/CD with Jenkins",
    questions: [
      {
        question: "Introduction to Jenkins",
        descriptions: [
          {
            description: "Automation Tooling",
            answers: ["Overview and use cases"],
          },
        ],
      },
      {
        question: "Jenkins Setup",
        descriptions: [
          {
            description: "Installation",
            answers: ["Using Docker for Jenkins"],
          },
        ],
      },
      {
        question: "Creating Pipelines",
        descriptions: [
          {
            description: "Pipeline Types",
            answers: ["Scripted", "Declarative"],
          },
          {
            description: "Pipeline Structure",
            answers: ["Stages", "Agents", "Variables"],
          },
        ],
      },
      {
        question: "Integrations",
        descriptions: [
          {
            description: "Toolchain Integration",
            answers: ["Docker", "Maven"],
          },
        ],
      },
      {
        question: "CI/CD Lifecycle",
        descriptions: [
          {
            description: "Build and Deploy",
            answers: [
              "Building Docker Images",
              "Testing",
              "Pushing to Registry",
            ],
          },
        ],
      },
    ],
  },
  {
    module: "Module 7: CI/CD with Azure DevOps (for AWS)",
    questions: [
      {
        question: "Overview of Azure DevOps",
        descriptions: [
          {
            description: "Pipeline Capabilities",
            answers: ["Limited to Pipeline usage for AWS"],
          },
        ],
      },
      {
        question: "Pipeline Configuration",
        descriptions: [
          {
            description: "AWS Deployment",
            answers: [
              "Terraform apply/destroy",
              "Docker build and push",
              "Deploying to EKS",
            ],
          },
        ],
      },
    ],
  },
  {
    module: "Module 8: Capstone Projects",
    questions: [
      {
        question: "End-to-End CI/CD Pipeline",
        descriptions: [
          {
            description: "Tools Integration",
            answers: [
              "Jenkins",
              "Terraform",
              "Ansible",
              "Docker",
              "Kubernetes (EKS)",
            ],
          },
          {
            description: "Deployment Goals",
            answers: [
              "Provisioning Infrastructure",
              "Microservice Deployment",
              "Monitoring and Logging",
            ],
          },
        ],
      },
    ],
  },
];
  return (  
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-10 lg:px-20 py-10 sm:py-15 lg:py-25 gap-4">
        <div className="w-full lg:w-1/2">
          <BannerLeft
            title="AWS DevOps Engineer"
            subtitle="Master AWS cloud services, container orchestration, CI/CD pipelines, infrastructure as code, and automation to deliver scalable and reliable applications."
            counter={[8500, 2900, 180]}
            // Example counters: students enrolled, projects completed, certifications earned (adjust as needed)
          />
        </div>
        <div className="w-full lg:w-1/2">
          {/* <BannerVideo
            videoId="YOUR_AWS_DEVOPS_VIDEO_ID"
            imageUrl={awsDevOpsImg}
          /> */}
          {/* Replace YOUR_AWS_DEVOPS_VIDEO_ID and awsDevOpsImg with your actual video ID and image */}
        </div>
      </div>
      <div className="bg-white py-6 text-center">
  <h1 className="bg-gradient-to-r from-[#0b090a] to-[#ba181b] bg-clip-text text-transparent text-3xl lg:text-5xl text-center fold-primary font-black">
    Our AWS DevOps Engineering Syllabus
  </h1>
  <p className="font-primary font-medium text-xl text-gray-800 mt-4">
    (ADVANCED)
  </p>
</div>

      <Faq items={moduleData} />
    </div>
  );
};

export default DevopsC;
