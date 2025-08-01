import React from "react";
import BannerLeft from "../components/Courses/BannerLeft";
import BannerVideo from "../components/Courses/BannerVideo";
import img from "../assets/images/productioncover.jpg";
import RoadmapItem from "../components/Courses/RoadmapItem";
import Faq from '../components/Courses/Faq'

const ProductionC = () => {
  const moduleData = [
  {
    module: "Module 1: Introduction to Production Support",
    questions: [
      {
        question: "Production Support Overview",
        descriptions: [
          {
            description: "Key Concepts",
            answers: [
              "Role and responsibilities of production support",
              "Difference between development and production support",
              "Types of production issues"
            ],
          },
        ],
      },
      {
        question: "Incident Management",
        descriptions: [
          {
            description: "Process",
            answers: [
              "Incident lifecycle",
              "Severity and priority classification",
              "Ticketing tools (e.g., ServiceNow)"
            ],
          },
        ],
      },
      {
        question: "Monitoring and Alerting",
        descriptions: [
          {
            description: "Tools and Techniques",
            answers: [
              "Monitoring applications and infrastructure",
              "Setting up alerts",
              "Using dashboards"
            ],
          },
        ],
      },
    ],
  },
  {
    module: "Module 2: Tools and Technologies",
    questions: [
      {
        question: "Operating Systems and Shell Scripting",
        descriptions: [
          {
            description: "Basics",
            answers: [
              "Linux commands",
              "Shell scripting fundamentals",
              "File and process management"
            ],
          },
        ],
      },
      {
        question: "Database Basics",
        descriptions: [
          {
            description: "SQL and Database Support",
            answers: [
              "Basic SQL queries",
              "Database troubleshooting",
              "Backup and recovery"
            ],
          },
        ],
      },
      {
        question: "Monitoring Tools",
        descriptions: [
          {
            description: "Popular Tools",
            answers: [
              "Nagios",
              "Splunk",
              "Grafana",
              "Prometheus"
            ],
          },
        ],
      },
      {
        question: "Ticketing and Collaboration Tools",
        descriptions: [
          {
            description: "Common Platforms",
            answers: [
              "JIRA",
              "ServiceNow",
              "Confluence"
            ],
          },
        ],
      },
    ],
  },
  {
    module: "Module 3: Production Support Processes",
    questions: [
      {
        question: "Incident Handling",
        descriptions: [
          {
            description: "Steps",
            answers: [
              "Incident detection",
              "Root cause analysis",
              "Resolution and recovery",
              "Documentation"
            ],
          },
        ],
      },
      {
        question: "Problem Management",
        descriptions: [
          {
            description: "Proactive Approach",
            answers: [
              "Identifying recurring incidents",
              "Permanent fixes",
              "Change requests"
            ],
          },
        ],
      },
      {
        question: "Change Management",
        descriptions: [
          {
            description: "Managing Changes",
            answers: [
              "Change request process",
              "Approvals",
              "Rollback procedures"
            ],
          },
        ],
      },
    ],
  },
  {
    module: "Module 4: Application Support",
    questions: [
      {
        question: "Support for Web Applications",
        descriptions: [
          {
            description: "Common Issues",
            answers: [
              "Application crashes",
              "Performance issues",
              "Log analysis"
            ],
          },
        ],
      },
      {
        question: "Support for Middleware and Batch Jobs",
        descriptions: [
          {
            description: "Monitoring and Troubleshooting",
            answers: [
              "Middleware components",
              "Job scheduling tools (e.g., Cron, Autosys)",
              "Failure handling"
            ],
          },
        ],
      },
    ],
  },
  {
    module: "Module 5: Communication and Documentation",
    questions: [
      {
        question: "Effective Communication",
        descriptions: [
          {
            description: "Best Practices",
            answers: [
              "Incident reporting",
              "Stakeholder communication",
              "Escalation matrix"
            ],
          },
        ],
      },
      {
        question: "Documentation",
        descriptions: [
          {
            description: "Importance",
            answers: [
              "Maintaining knowledge base",
              "Updating runbooks",
              "Post-incident reports"
            ],
          },
        ],
      },
    ],
  },
  {
    module: "Module 6: Career and Soft Skills",
    questions: [
      {
        question: "Team Collaboration",
        descriptions: [
          {
            description: "Working Effectively",
            answers: [
              "Agile methodologies",
              "Cross-team coordination",
              "Conflict resolution"
            ],
          },
        ],
      },
      {
        question: "Time Management and Prioritization",
        descriptions: [
          {
            description: "Handling Multiple Tasks",
            answers: [
              "Prioritizing incidents",
              "Managing stress",
              "Meeting SLAs"
            ],
          },
        ],
      },
    ],
  },
];

  const icons = [
    <svg
      viewBox="0 0 2050 2050"
      data-name="Layer 3"
      id="Layer_3"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-white group-hover:fill-red-600"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style></style>
        </defs>
        <title></title>
        <path
          className="cls-1"
          d="M882.7,1062.9H465.1a45.1,45.1,0,0,1-45-45V600.3a45,45,0,0,1,45-45H882.7a44.9,44.9,0,0,1,45,45v417.6A45,45,0,0,1,882.7,1062.9Z"
        ></path>
        <path
          className="cls-1"
          d="M1584.9,728.8H1091.2a45,45,0,0,1,0-90h493.7a45,45,0,0,1,0,90Z"
        ></path>
        <path
          className="cls-1"
          d="M1584.9,984.1H1091.2a45,45,0,0,1,0-90h493.7a45,45,0,0,1,0,90Z"
        ></path>
        <path
          className="cls-1"
          d="M1584.9,1239.4H465.1a45,45,0,1,1,0-90H1584.9a45,45,0,0,1,0,90Z"
        ></path>
        <path
          className="cls-1"
          d="M1584.9,1494.7H465.1a45,45,0,0,1,0-90H1584.9a45,45,0,0,1,0,90Z"
        ></path>
        <path
          className="cls-2"
          d="M671.6,926.9a45,45,0,0,1-45-45V759.5a45,45,0,0,1,90,0V881.9A45.1,45.1,0,0,1,671.6,926.9Z"
        ></path>
        <path
          className="cls-2"
          d="M753,792.9H594.8a45,45,0,0,1,0-90H753a45,45,0,0,1,0,90Z"
        ></path>
      </g>
    </svg>,
    <svg
      className="fill-white group-hover:fill-red-600"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="m10.361 12.443h1.592l-.832-1.354-1.545 2.447h-.713l1.878-2.946c.049-.048.104-.091.162-.128l.004-.002c.059-.037.131-.059.208-.059h.006c.071.001.137.023.192.06l-.001-.001c.063.039.117.082.166.13l1.878 2.946h-.713l-.333-.546h-1.592zm7.271.547v-2.542h-.594v2.78.009c0 .04.009.078.025.112l-.001-.002c.019.037.043.068.071.095.017.033.045.058.079.071h.001c.038.015.081.024.127.024h.003 2.709l.333-.546zm-9.814-.476h.015c.281 0 .536-.113.722-.297.19-.177.309-.429.309-.709 0-.006 0-.011 0-.017v.001c0-.008 0-.018 0-.028 0-.283-.119-.539-.309-.72-.185-.184-.44-.297-.722-.297-.005 0-.011 0-.016 0h-2.614v3.089h.597v-2.542h1.972.015c.134 0 .254.055.341.143.088.087.143.208.143.341v.016-.001c-.001.134-.055.256-.142.345-.085.095-.209.155-.346.155-.004 0-.008 0-.011 0h-1.689l1.782 1.545h.855l-1.189-1.022zm-6.274 1.022c-.002 0-.005 0-.008 0-.42 0-.8-.173-1.072-.451-.286-.269-.463-.649-.463-1.071 0-.008 0-.016 0-.024v.001c0-.006 0-.014 0-.022 0-.422.178-.802.463-1.07l.001-.001c.273-.279.653-.451 1.073-.451h.008 1.806.025c.419 0 .797.173 1.068.451.279.271.451.649.451 1.068v.026-.001.023c0 .42-.174.799-.453 1.07-.271.279-.649.451-1.068.451-.009 0-.018 0-.026 0h.001zm1.76-.546h.024c.271 0 .516-.114.688-.297.176-.177.285-.421.285-.69 0-.004 0-.008 0-.011v.001c0-.008 0-.018 0-.027 0-.268-.109-.511-.285-.686-.175-.176-.418-.285-.686-.285-.009 0-.019 0-.028 0h.001-1.712c-.003 0-.007 0-.011 0-.269 0-.513.109-.69.285-.183.173-.297.418-.297.689v.025-.001.007c0 .273.114.519.296.694.175.183.421.297.694.297h.007zm11.287.546c-.007 0-.016 0-.025 0-.419 0-.797-.173-1.068-.451-.279-.271-.451-.649-.451-1.068 0-.009 0-.018 0-.026v.001c0-.007 0-.016 0-.025 0-.419.173-.797.451-1.068.271-.279.649-.451 1.068-.451h.026-.001 2.138l-.357.546h-1.76c-.003 0-.007 0-.011 0-.269 0-.513.109-.69.285-.183.173-.297.418-.297.689v.025-.001.007c0 .273.114.519.296.694.175.183.421.297.694.297h.007 2.16l-.357.546zm7.247-.546c-.002 0-.005 0-.008 0-.224 0-.429-.081-.588-.215l.001.001c-.166-.133-.29-.31-.355-.515l-.002-.008h2.542l.333-.546h-2.875c.065-.208.188-.381.351-.506l.002-.002c.159-.126.363-.202.584-.202h.011 1.759l.357-.546h-2.138c-.007 0-.016 0-.025 0-.419 0-.797.173-1.068.451-.279.271-.451.649-.451 1.068v.026-.001.025c0 .419.173.797.451 1.068.271.279.649.451 1.068.451h.026-.001 1.827l.357-.546z"></path>
      </g>
    </svg>,
    <svg
      className="fill-white group-hover:fill-red-600"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M8.294 1c-.09 0-.184.005-.28.012-2.465.194-1.811 2.804-1.85 3.674-.043.637-.174 1.14-.612 1.762-.516.613-1.24 1.604-1.584 2.637-.162.485-.24.982-.167 1.452a.247.247 0 00-.064.079c-.152.156-.263.35-.387.49-.116.115-.283.155-.465.232-.183.08-.384.157-.504.397a.78.78 0 00-.077.351c0 .116.016.234.032.313.034.233.068.425.023.566-.145.396-.163.668-.062.865.102.195.313.275.549.351.472.117 1.114.079 1.618.35.54.272 1.088.39 1.526.274.307-.067.566-.27.705-.552.342-.001.717-.157 1.318-.194.408-.034.918.155 1.503.116.015.078.037.116.067.194l.001.002c.229.454.65.66 1.1.625.45-.035.928-.313 1.316-.762.368-.446.982-.632 1.387-.877.203-.116.367-.273.379-.497.013-.234-.117-.473-.417-.803v-.056l-.002-.002c-.099-.117-.145-.312-.197-.54-.05-.234-.106-.459-.287-.61h-.001c-.035-.032-.072-.04-.11-.08a.208.208 0 00-.11-.037c.25-.745.153-1.487-.102-2.154-.31-.823-.854-1.54-1.269-2.032-.464-.587-.919-1.142-.91-1.965.016-1.255.138-3.578-2.067-3.581zm.309 1.986h.007c.125 0 .231.036.34.116a.89.89 0 01.256.31c.062.152.093.268.097.423 0-.012.004-.023.004-.035v.061a.05.05 0 01-.003-.012l-.002-.014c-.001.142-.03.282-.087.412a.556.556 0 01-.125.195.415.415 0 00-.051-.024c-.06-.027-.115-.038-.166-.078a.765.765 0 00-.128-.038c.03-.035.085-.078.107-.116a.69.69 0 00.051-.234V3.94a.706.706 0 00-.035-.233c-.027-.079-.06-.117-.107-.195-.05-.038-.098-.077-.156-.077h-.01c-.054 0-.102.018-.152.077a.467.467 0 00-.12.195.688.688 0 00-.052.234v.01c0 .053.004.105.011.156-.112-.039-.255-.078-.354-.117a.954.954 0 01-.01-.117V3.86a1.034 1.034 0 01.087-.448.63.63 0 01.251-.31.575.575 0 01.347-.117zm-1.728.035h.02c.084 0 .158.028.234.078a.806.806 0 01.2.272c.053.116.082.233.09.389v.002a.856.856 0 01-.002.155v.047l-.048.014c-.089.032-.16.079-.23.117a.633.633 0 00.002-.156V3.93c-.007-.078-.023-.117-.047-.194a.358.358 0 00-.097-.156.145.145 0 00-.107-.037h-.012c-.042.003-.076.023-.109.077a.322.322 0 00-.07.157.55.55 0 00-.013.193v.008c.007.08.021.117.047.195a.363.363 0 00.096.157c.006.005.012.01.02.014-.04.033-.068.04-.102.079a.177.177 0 01-.077.04 1.53 1.53 0 01-.16-.235 1.034 1.034 0 01-.09-.389c-.01-.132.005-.264.046-.39a.834.834 0 01.165-.312c.075-.077.152-.116.244-.116zm.799.995c.194 0 .428.038.71.233.17.116.304.157.613.273h.002c.149.079.236.155.279.232v-.076a.333.333 0 01.009.274c-.072.18-.301.375-.62.491v.001c-.156.08-.292.195-.452.272-.161.078-.343.17-.59.155a.664.664 0 01-.262-.039 2.077 2.077 0 01-.188-.115c-.113-.079-.211-.194-.357-.271v-.003h-.003c-.233-.144-.359-.299-.4-.414-.04-.157-.003-.275.113-.35.13-.08.221-.159.282-.197.06-.043.083-.059.102-.076h.001v-.002c.099-.117.255-.274.49-.35.08-.021.171-.038.272-.038h-.001zm1.633 1.25c.21.826.698 2.026 1.012 2.609.167.311.5.967.643 1.764.091-.003.193.01.3.037.376-.975-.319-2.022-.636-2.314-.128-.116-.135-.195-.071-.195.344.312.796.917.96 1.608.075.312.093.644.012.974.039.017.079.035.12.04.601.311.824.547.717.896v-.025c-.035-.002-.07 0-.105 0h-.01c.089-.272-.106-.481-.62-.714-.534-.233-.96-.196-1.033.271-.005.025-.008.039-.01.079-.04.013-.082.03-.123.037-.25.157-.386.39-.462.693-.076.31-.1.674-.12 1.09v.002c-.011.195-.099.489-.186.787-.875.626-2.088.897-3.12.195a1.543 1.543 0 00-.234-.31.846.846 0 00-.16-.195.963.963 0 00.27-.04.359.359 0 00.184-.194c.063-.156 0-.407-.201-.678-.201-.273-.543-.58-1.043-.888-.368-.233-.575-.507-.671-.814-.096-.312-.083-.633-.009-.96.143-.624.51-1.23.743-1.611.063-.038.022.078-.238.568-.23.438-.665 1.456-.07 2.248.022-.578.15-1.146.377-1.678.329-.745 1.016-2.044 1.07-3.073.029.021.127.08.17.118.126.078.22.194.343.271a.694.694 0 00.511.196l.065.003c.24 0 .425-.078.581-.156.17-.078.304-.195.432-.233h.003c.272-.08.487-.235.609-.409zm1.275 5.225c.021.35.2.726.514.803.343.078.837-.194 1.045-.446l.123-.006c.184-.004.337.006.494.156l.002.002c.121.116.178.31.228.511.05.233.09.455.239.622.283.307.376.528.37.665l.003-.004v.01l-.002-.007c-.009.153-.108.231-.29.347-.368.234-1.02.416-1.434.916-.36.43-.8.665-1.188.695-.387.03-.721-.117-.918-.524l-.003-.002c-.122-.233-.07-.597.033-.985.103-.39.25-.784.27-1.107.022-.417.044-.779.114-1.058.07-.271.18-.465.374-.574l.026-.013v-.001zm-6.308.028h.006a.53.53 0 01.091.009c.22.032.412.194.597.438l.53.97.003.003c.141.31.44.62.693.955.253.348.45.66.425.915v.004c-.033.434-.28.67-.656.755-.376.079-.887 0-1.397-.27-.565-.314-1.235-.274-1.667-.352-.215-.039-.355-.117-.421-.233-.064-.117-.066-.352.071-.718v-.002l.002-.002c.068-.195.017-.439-.016-.652-.032-.234-.049-.414.025-.549.093-.194.23-.233.402-.31.172-.08.374-.118.534-.275h.001c.15-.157.26-.351.39-.49.11-.117.222-.196.387-.196zM8.45 5.226c-.254.117-.551.312-.868.312-.316 0-.566-.155-.747-.272-.09-.078-.163-.156-.217-.195-.096-.078-.084-.194-.044-.194.064.01.076.078.117.117.056.038.125.116.21.194.17.116.396.272.68.272.283 0 .615-.156.816-.272.114-.078.26-.194.378-.272.09-.08.087-.156.163-.156.074.01.02.078-.086.194-.13.098-.264.189-.403.273zm-.631-.923V4.29c-.004-.012.007-.024.017-.03.043-.024.105-.015.151.003.037 0 .094.04.088.079-.004.029-.05.038-.079.038-.032 0-.054-.025-.082-.04-.03-.01-.085-.004-.095-.037zm-.322 0c-.011.034-.066.028-.097.038-.027.015-.05.04-.081.04-.03 0-.076-.012-.08-.04-.005-.038.052-.077.088-.077.047-.018.107-.028.151-.003.011.005.021.017.018.029v.012h.001z"></path>
      </g>
    </svg>,
    <svg
      className="fill-white group-hover:fill-red-600"
      viewBox="0 0 846.66 846.66"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style type="text/css">{`.fil0 {fill:white;fill-rule:nonzero}`}</style>
        </defs>
        <g id="Layer_x0020_1">
          <path
            className="fil0"
            d="M539.75 794.68c27.15,0 27.15,41.29 0,41.29l-497.47 0c-11.4,0 -20.64,-9.25 -20.64,-20.65l0 -621.69c0,-5.7 2.31,-10.87 6.04,-14.6l162.3 -162.29c4.03,-4.03 9.31,-6.05 14.59,-6.05l466.89 0c11.4,0 20.65,9.25 20.65,20.65l0 361.36c0,27.16 -41.29,27.16 -41.29,0l0 -340.72 -437.7 0 -150.19 150.2 0 592.5 476.82 0zm-351.21 -181.98c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 -274.68c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 91.56c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 91.56c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 -274.68c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm496.57 238.25c49.84,0 90.24,40.4 90.24,90.24 0,18.1 -5.33,34.95 -14.5,49.07 37.57,24.93 61.47,66.08 64.13,111.2 1.59,27.06 -39.55,29.47 -41.13,2.42 -2.11,-35.69 -22.61,-67.48 -54.13,-84.24 -13.16,7.5 -28.38,11.78 -44.61,11.78 -17.56,0 -33.95,-5.01 -47.81,-13.69 -33.44,16.12 -55.6,49.04 -57.79,86.15 -1.59,27.05 -42.72,24.64 -41.13,-2.42 2.79,-47.18 28.75,-89.88 69.08,-114.28 -7.99,-13.47 -12.58,-29.19 -12.58,-45.99 0,-49.83 40.4,-90.24 90.23,-90.24zm0 41.29c-27.03,0 -48.94,21.92 -48.94,48.95 0,27.03 21.91,48.94 48.94,48.94 27.03,0 48.95,-21.91 48.95,-48.94 0,-27.03 -21.91,-48.95 -48.95,-48.95z"
          />
        </g>
      </g>
    </svg>,

    <svg
      className="fill-white group-hover:fill-red-600"
      viewBox="0 0 846.66 846.66"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style type="text/css">{`.fil0 {fill:white;fill-rule:nonzero}`}</style>
        </defs>
        <g id="Layer_x0020_1">
          <path
            className="fil0"
            d="M539.75 794.68c27.15,0 27.15,41.29 0,41.29l-497.47 0c-11.4,0 -20.64,-9.25 -20.64,-20.65l0 -621.69c0,-5.7 2.31,-10.87 6.04,-14.6l162.3 -162.29c4.03,-4.03 9.31,-6.05 14.59,-6.05l466.89 0c11.4,0 20.65,9.25 20.65,20.65l0 361.36c0,27.16 -41.29,27.16 -41.29,0l0 -340.72 -437.7 0 -150.19 150.2 0 592.5 476.82 0zm-351.21 -181.98c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 -274.68c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 91.56c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 91.56c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 -274.68c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm496.57 238.25c49.84,0 90.24,40.4 90.24,90.24 0,18.1 -5.33,34.95 -14.5,49.07 37.57,24.93 61.47,66.08 64.13,111.2 1.59,27.06 -39.55,29.47 -41.13,2.42 -2.11,-35.69 -22.61,-67.48 -54.13,-84.24 -13.16,7.5 -28.38,11.78 -44.61,11.78 -17.56,0 -33.95,-5.01 -47.81,-13.69 -33.44,16.12 -55.6,49.04 -57.79,86.15 -1.59,27.05 -42.72,24.64 -41.13,-2.42 2.79,-47.18 28.75,-89.88 69.08,-114.28 -7.99,-13.47 -12.58,-29.19 -12.58,-45.99 0,-49.83 40.4,-90.24 90.23,-90.24zm0 41.29c-27.03,0 -48.94,21.92 -48.94,48.95 0,27.03 21.91,48.94 48.94,48.94 27.03,0 48.95,-21.91 48.95,-48.94 0,-27.03 -21.91,-48.95 -48.95,-48.95z"
          />
        </g>
      </g>
    </svg>,
  ];

  const roadmapData = [
    { title: "HTML/CSS", duration: "10 Days", icon: icons[0] },
    { title: "SQL(Oracle)", duration: "25 Days", icon: icons[1] },
    { title: "UNIX", duration: "25 days", icon: icons[2] },
    { title: "Projects/Resume", duration: "15 days", icon: icons[3] },
    { title: "Mock Interviews", duration: "15 days", icon: icons[4] },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-10 lg:px-20 py-10 sm:py-15 lg:py-25 gap-4">
        <div className="w-full lg:w-1/2">
          <BannerLeft
            title="Production Support Enginner"
            subtitle="Get hands-on with SQL, Linux, UNIX, Monitoring Tools, and Incident Management to confidently handle real-time issues and ensure seamless system uptime."
            counter={[9050, 3200, 250]}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <BannerVideo videoId="xZjnLNcNLzU" imageUrl={img} />
        </div>
      </div>

      <div className="bg-white py-4 text-center">
        <h1 className="px-4 text-black text-3xl lg:text-5xl text-center fold-primary font-black">
          From Fundamentals to{" "}
          <span className="text-primary-600">First Responder</span>
        </h1>
        <p className="font-primary font-medium text-xl text-gray-800 mt-4 ">
          Production Support Engineering (HARD)
        </p>
      </div>
      <div className="relative">
        <div className="relative overflow-hidden px-20 py-10">
          <div className="absolute -top-5 main-wave">
            <svg
              className="wave"
              width="100%"
              height="100%"
              viewBox="0 0 900 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="roadmapGradient"
                  x1="0"
                  y1="0"
                  x2="900"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#0b090a" />
                  <stop offset="100%" stopColor="#ba181b" />
                </linearGradient>
              </defs>

              <path
                d="
              M50 80
              L850 80
             
             
            "
                stroke="url(#roadmapGradient)"
                strokeWidth="6"
                strokeDasharray="5 5"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute top-8.5 left-23 border-b-4 border-b-[#0b090a]">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M14 22V16.9612C14 16.3537 13.7238 15.7791 13.2494 15.3995L11.5 14M11.5 14L13 7.5M11.5 14L10 13M13 7.5L11 7M13 7.5L15.0426 10.7681C15.3345 11.2352 15.8062 11.5612 16.3463 11.6693L18 12M10 13L11 7M10 13L9.40011 16.2994C9.18673 17.473 8.00015 18.2 6.85767 17.8573L4 17M11 7L8.10557 8.44721C7.428 8.786 7 9.47852 7 10.2361V12M14.5 3.5C14.5 4.05228 14.0523 4.5 13.5 4.5C12.9477 4.5 12.5 4.05228 12.5 3.5C12.5 2.94772 12.9477 2.5 13.5 2.5C14.0523 2.5 14.5 2.94772 14.5 3.5Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="absolute bottom-50 right-22.5">
            <svg
              height="64px"
              width="64px"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xml:space="preserve"
              fill="#ba181b"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <style type="text/css"> {`.st0{fill:#000000;}`} </style>{" "}
                <g>
                  {" "}
                  <path
                    className="st0"
                    d="M275.175,74.728c20.637,0,37.372-16.728,37.372-37.364C312.547,16.727,295.812,0,275.175,0 c-20.629,0-37.357,16.727-37.357,37.364C237.818,58,254.546,74.728,275.175,74.728z"
                  ></path>{" "}
                  <polygon
                    className="st0"
                    points="372.199,419.995 282.451,419.995 282.451,354.645 192.737,354.645 192.737,289.282 102.993,289.282 102.993,223.918 26.559,223.918 26.559,250.56 76.359,250.56 76.359,315.923 166.103,315.923 166.103,381.287 255.817,381.287 255.817,446.637 345.568,446.637 345.568,512 460.237,512 460.237,485.366 372.199,485.359 "
                  ></polygon>{" "}
                  <path
                    className="st0"
                    d="M477.983,181.243c-0.636-4.242-4.588-7.168-8.838-6.532l-17.934,2.695l-1.532-10.195 c-0.636-4.147-4.494-6.987-8.635-6.373l-1.878,0.282c-0.261-1.734-0.86-3.447-1.85-5.022l-25.897-41.411 c-2.796-4.466-7.052-7.819-12.053-9.488L352.48,83.334c-15.857-7.392-34.21-6.597-49.42,1.821l-9.748,59.294l-36.128-30.63 l-28.882,18.187l-42.183-19.799c-6.554-3.671-14.82-1.495-18.714,4.92l-0.535,0.867c-1.922,3.187-2.514,6.994-1.618,10.601 c0.888,3.606,3.194,6.705,6.387,8.612l50.277,30.002c6.25,3.736,13.874,4.408,20.687,1.836l29.777-16.041l14.119,56.952 l-46.932-0.238c-7.905-0.022-15.412,3.483-20.456,9.574c-5.044,6.091-7.088,14.119-5.586,21.887l15.788,81.282 c1.748,9.003,10.282,15.03,19.35,13.672l0.679-0.102c8.982-1.344,15.347-9.458,14.516-18.498l-5.347-58.24l70.819,1.648 c10.167,0.231,19.889-4.156,26.443-11.937c6.554-7.775,9.22-18.108,7.262-28.094l-1.814-9.205l-14.564-82.2l37.534,5.542 l27.458,31.844c-1.618,1.648-2.565,3.902-2.204,6.359l1.532,10.21l-17.927,2.695c-4.249,0.636-7.168,4.595-6.525,8.844l7.363,48.99 c0.644,4.241,4.596,7.168,8.838,6.532l76.101-11.446c4.242-0.636,7.161-4.596,6.525-8.844L477.983,181.243z M295.162,168.496 c0-2.558,2.074-4.625,4.624-4.625s4.624,2.067,4.624,4.625c0,2.558-2.074,4.624-4.624,4.624S295.162,171.054,295.162,168.496z M304.714,199.018c-2.551,0-4.625-2.066-4.625-4.624s2.074-4.624,4.625-4.624c2.55,0,4.624,2.066,4.624,4.624 S307.265,199.018,304.714,199.018z M416.745,172.644c4.329,4.205,10.984,5,16.157,1.719l0.304-0.195 c2.182-1.38,3.801-3.316,4.827-5.484l4.104-0.621l0.318,0.232l1.532,10.202l-25.781,3.873L416.745,172.644z"
                  ></path>{" "}
                  <path
                    className="st0"
                    d="M393.667,384.835c6.286,6.568,16.67,6.965,23.44,0.888l0.485-0.426c6.749-6.055,7.486-16.381,1.676-23.353 l-38.701-51.932l-12.342-60.126c-0.838,1.207-1.698,2.4-2.652,3.534c-9.205,10.932-22.692,17.204-36.992,17.204l-6.576-0.152 l14.43,46.909c3.338,6.908,7.681,13.296,12.873,18.968L393.667,384.835z"
                  ></path>{" "}
                  <polygon
                    className="st0"
                    points="273.983,118.899 285.913,125.026 290.848,111.818 284.41,98.075 268.766,107.757 "
                  ></polygon>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div className="grid grid-cols-5 space-y-25 px-35">
            {roadmapData.map((item, index) => (
              <RoadmapItem
                key={index}
                title={item.title}
                duration={item.duration}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        <p className="absolute bottom-15 right-35 font-primary font-bold text-xl pt-4 text-center lg:text-end">
          Total: <span className="text-red-600">100</span> Days to{" "}
          <span className="text-red-600">130</span> Days
        </p>
      </div>
      <div className="bg-white py-6 text-center">
  <h1 className="bg-gradient-to-r from-[#0b090a] to-[#ba181b] bg-clip-text text-transparent text-3xl lg:text-5xl text-center fold-primary font-black">
    Our Production Support Syllabus
  </h1>
  <p className="font-primary font-medium text-xl text-gray-800 mt-4">
    (ESSENTIAL)
  </p>
</div>

      <Faq items={moduleData}/>
    </div>
  );
};

export default ProductionC;
