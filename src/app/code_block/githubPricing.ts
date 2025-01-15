const code = {
    language: 'tsx',
    code: `//style.css
@font-face {
  font-family: 'MonoSans-light';
  src: url('../fonts/Monosans/Mona-Sans-Light.otf') format('opentype');
  font-style: normal;
  font-display: swap;
}
  
@font-face {
  font-family: 'MonoSans-medium';
  src: url('../fonts/Monosans/Mona-Sans-Medium.otf') format('opentype');
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'MonoSans-bold';
  src: url('../fonts/Monosans/Mona-Sans-Bold.otf') format('opentype');
  font-style: normal;
  font-display: swap;
}
  
.font-mono-sans-bold {
  font-family: 'MonoSans-bold', Helvetica, Arial, sans-serif;
}

.font-mono-sans-medium {
  font-family: 'MonoSans-medium', Helvetica, Arial, sans-serif;
}

.font-mono-sans-light {
  font-family: 'MonoSans-light', Helvetica, Arial, sans-serif;
}

* {
  ::selection {
    background-color: transparent;
  }
}

//page.tsx
'use client';

import { useState } from 'react';

interface Feature {
  text: string;
  subtext?: string;
  description: string;
}

interface PricingCardProps {
  tier: string;
  description: string;
  price: string;
  period?: string;
  buttonText: string;
  features: Feature[];
  recommended?: boolean;
  secondaryButton?: string | null;
}

function PricingCard({ tier, description, price, period = "per user/month", buttonText, features, recommended = false, secondaryButton = null }: PricingCardProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [featuresDisplayed, setFeaturesDisplayed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const toggleItem = (index:number) => {
    setExpandedItems((prev:any) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className={\`w-full flex flex-col rounded-lg p-2 \${recommended ? 'bg-[#645a8c7f]' : 'bg-transparent'} relative\`}>
      <p className={\`\${recommended? 'text-white': 'text-transparent'} bg-transparent text-center px-4 py-1 rounded-full text-sm\`}>RECOMMENDED</p>
      
      <div className='bg-[#2b1a5b7c] px-4 pt-6 text-center rounded-t-lg'>
        <h2 className="text-xl md:text-2xl mb-2">{tier}</h2>
        <p className="font-mono-sans-light whitespace-pre-line text-sm mb-6">{description}</p>
        <div className="flex flex-row flex-wrap gap-x-1 sm:gap-x-2 justify-center leading-none font-mono-sans-light mb-2 sm:mb-6">
          <span className=" text-lg md:text-xl self-start">$</span>
          <span className="text-[28px] md:text-4xl xl:text-5xl font-mono-sans-medium">{price}</span>
          <span className="text-xl lg:text-2xl font-mono-sans-medium self-end">USD</span>
          <span className="text-base self-center">{period}</span>
        </div>

        {secondaryButton && (
          <button className="w-full py-4 px-6 rounded-md mb-4 bg-black text-white text-base">
            {secondaryButton}
          </button>
        )}

        <button className="w-full text-base py-4 px-6 rounded-md mb-4 border border-gray-300 hover:bg-[#090614] hover:border-transparent">
          {buttonText}
        </button>
      </div>
      
      <ul className="list-none grow py-2 px-4 rounded-b-lg bg-[#2b1a5b7c]">
        {
          !featuresDisplayed &&
          <button onClick={()=>{setFeaturesDisplayed(true);setIsVisible(!isVisible)}} className="block lg:hidden w-full text-base py-4 px-6 rounded-md mb-0 border border-gray-300">
          Show Features
        </button>
        }
        {features.map((feature:any, index:any) => (
          <li key={index} className={\`\${isVisible? 'block': 'hidden'} lg:block py-2 text-sm\`}>
            <div onClick={() => toggleItem(index)}  className='flex flex-row items-start gap-x-2 cursor-pointer'>
              <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  d="M9 5l7 7-7 7" />
              </svg>
              <p className="text-sm">
                <span>{feature.text}</span>
                <span>
                  {feature.subtext && (
                    <span className="block font-mono-sans-light text-xs ">{feature.subtext}</span>
                  )}
                </span>
              </p>
            </div>
            {
              expandedItems[index] && (
                <p className='mt-2 pl-6 font-mono-sans-light'>{feature.description}</p>
            )}
          </li>
        ))}
        {
          featuresDisplayed &&
          <button onClick={()=>{setFeaturesDisplayed(false);setIsVisible(!isVisible)}} className="block lg:hidden w-full text-base py-4 px-6 rounded-md mt-4 border border-gray-300">
          Hide Features
        </button>
        }
        
      </ul>
    </div>
  )
};

export default function Home (){
  return (
    <main className="p-2 pb-16 2xl:w-[1000px] mx-auto">
      <Header/>
      <Nav parentUrl={{title: 'Shopify homepage', link: '/shopify'}} pageTitle='Shopify homepage hero' code={code}/>
      <div style={{ backgroundImage: "url('/github/sky.jpg')"}} className="min-h-screen p-4 sm:p-10 lg:p-0 bg-cover bg-center font-mono-sans-bold text-white">
        <div className='lg:w-[95%] xl:w-[85%] mx-auto'>
          <h1 className="pt-3 mb-4 sm:mb-12  md:text-5xl text-3xl lg:text-6xl text-white text-center">Get the complete developer platform.</h1>
          <div className="flex flex-col lg:flex-row gap-4">
            <PricingCard {...pricingData.free} />
            <PricingCard {...pricingData.team} />
            <PricingCard {...pricingData.enterprise} recommended={true} />
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
};


const pricingData = {
  free: {
    tier: "Free",
    description: \`The basics for individuals 
    and organizations\`,
    price: "0",
    buttonText: "Join for free",
    features: [
      {
        text: 'Unlimited public/private repositories',
        subtext: '',
        description: 'Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.'
      },
      {
        text: "Automatic security and version updates",
        subtext: "",
        description: "Keep projects secure by automatically opening pull requests that update vulnerable dependencies to secure versions, and update out-of-date dependencies."
      },
      {
        text: "2,000 CI/CD minutes/month",
        subtext: "Free for public repositories",
        description: "Use execution minutes with GitHub Actions to automate your software development workflows. Write tasks and combine them to build, test, and deploy any code project on GitHub."
      },
      {
        text: "500MB of Packages storage",
        subtext: "Free for public repositories",
        description: "Host your own software packages or use them as dependencies in other projects. Both private and public hosting available."
      },
      {
        text: "Issues & Projects",
        subtext: "",
        description: "Give your developers flexible features for project management that adapts to any team, project, and workflow — all alongside your code."
      },
      {
        text: "Community support",
        subtext: "",
        description: "Get help with most of your GitHub questions and issues in our Community Forum."
      }
    ],
    addOns: {
      title: 'Featured add-ons',
      features: [
        {
          text: 'GitHub Copilot Access',
          subtext: '',
          description: 'With GitHub Copilot, get suggestions for whole lines or entire functions—right inside your editor.'
        },
        {
          text: 'GitHub Cospaces Access',
          subtext: '',
          description: 'With GitHub Codespaces, get an instant dev environment in the cloud, so you can code anywhere on any device.'
        }
      ]
    }
  },
  team: {
    tier: "Team",
    description: \`Advanced collaboration for 
    individuals and organizations\`,
    price: "4",
    buttonText: "Continue with Team",
    features: [
      {
        text: 'Access to GitHub Codespaces',
        subtext: '',
        description: 'Blazing fast cloud developer environments with flexible compute and pre-configured containers, developers can code, collaborate, and debug from any browser. Pay only for what you use with compute fees starting at $0.18/hr and storage fees at $0.07/GB per month.'
      },
      {
        text: 'Protected branches',
        subtext: '',
        description: 'Enforce restrictions on how code branches are merged, including requiring reviews by selected collaborators, or allowing only specific contributors to work on a particular branch'
      },
      {
        text: 'Multiple reviewers in pull requests',
        subtext: '',
        description: 'Assign multiple users or a team to review a pull request.'
      },
      {
        text: 'Draft pull requests',
        subtext: '',
        description: 'Easily discuss and collaborate on pull requests before submitting to formal review.'
      },
      {
        text: 'Code owners',
        subtext: '',
        description: 'Automatically request reviews—or require approval—by selected contributors when changes are made to sections of code that they own.'
      },
      {
        text: 'Required reviewers',
        subtext: '',
        description: 'Ensure that pull requests have a specific number of approving reviews before collaborators can make changes to a protected branch.'
      },
      {
        text: 'Pages and Wikis',
        subtext: '',
        description: 'Host documentation and simple websites for your project in a wiki format that contributors can easily edit either on the web or command line.'
      },
      {
        text: 'Environment deployment branches and secrets',
        subtext: '',
        description: 'A job cannot access secrets that are defined in an environment unless it is running on the specified branch.'
      },
      {
        text: "3,000 CI/CD minutes/month",
        subtext: "Free for public repositories",
        description: "Use execution minutes with GitHub Actions to automate your software development workflows. Write tasks and combine them to build, test, and deploy any code project on GitHub."
      },
      {
        text: "2GB of Packages storage",
        subtext: "Free for public repositories",
        description: "Host your own software packages or use them as dependencies in other projects. Both private and public hosting available."
      },
      {
        text: 'Web-based support',
        subtext: '',
        description: 'GitHub Support can help you troubleshoot issues you run into while using GitHub.'
      }
    ],
    addOns: null
  },
  enterprise: {
    tier: "Enterprise",
    description: \`Security, compliance, 
    and flexible deployment\`,
    price: "21",
    period: "per user/month",
    buttonText: "Start a free trial",
    secondaryButton: "Contact Sales",
    features: [
      {
        text: 'Data residency',
        subtext: '',
        description: 'GitHub Enterprise Cloud offers a multi-tenant enterprise SaaS solution on Microsoft Azure, allowing you to choose a regional cloud deployment for data residency, so your in-scope data is stored at rest in a designated location. This is available in the EU with additional regions coming soon. Contact our sales team to learn more.'
      },
      {
        text: 'Enterprise Managed Users',
        subtext: '',
        description: 'Own and control the user accounts of your enterprise members through your identity provider (IdP).'
      },
      {
        text: 'User provisioning through SCIM',
        subtext: '',
        description: "Automatically invite members to join your organization when you grant access on your IdP. If you remove a member's access to your GitHub organization on your SAML IdP, the member will be automatically removed from the GitHub organization."
      },
      {
        text: 'Enterprise Account to centrally manage multiple organizations',
        subtext: '',
        description: 'GitHub Enterprise Cloud includes the option to create an enterprise account, which enables collaboration between multiple organizations, gives administrators a single point of visibility and management and brings license cost savings for identical users in multiple organizations.'
      },
      {
        text: 'Environment protection rules',
        subtext: '',
        description: "When a workflow job references an environment, the job won't start until all of the environment's protection rules pass."
      },
      {
        text: 'Repository rules',
        subtext: '',
        description: 'Enforce branch and tag restrictions across your organization, ensuring branch and tag protection across your repositories. Evaluate rules to asses impact before enforcement.'
      },
      {
        text: 'Audit Log API',
        subtext: '',
        description: 'As a GitHub Enterprise Cloud organization administrator, you can now access log events using our GraphQL API and monitor the activity in your organization.'
      },
      {
        text: 'SOC1, SOC2, type 2 reports annually',
        subtext: '',
        description: 'GitHub offers AICPA System and Organization Controls (SOC) 1 Type 2 and SOC 2 Type 2 reports with IAASB International Standards on Assurance Engagements, ISAE 3000, and ISAE 3402.'
      },
      {
        text: 'FedRAMP Tailored Authority to Operate (ATO)',
        subtext: '',
        description: 'Government users can host projects on GitHub Enterprise Cloud with the confidence that our platform meets the low impact software-as-a-service (SaaS) baseline of security standards set by our U.S. federal government partners.'
      },
      {
        text: 'SAML single sign-on',
        subtext: '',
        description: 'Use an identity provider to manage the identities of GitHub users and applications.'
      },
      {
        text: 'Advanced auditing',
        subtext: '',
        description: 'Quickly review the actions performed by members of your organization. Keep copies of audit log data to ensure secure IP and maintain compliance for your organization.'
      },
      {
        text: 'GitHub Connect',
        subtext: '',
        description: 'Share features and workflows between your GitHub Enterprise Server instance and GitHub Enterprise Cloud.'
      },
      {
        text: "50,000 CI/CD minutes/month",
        subtext: "Free for public repositories",
        description: "Use execution minutes with GitHub Actions to automate your software development workflows. Write tasks and combine them to build, test, and deploy any code project on GitHub."
      },
      {
        text: "50GB of Packages storage",
        subtext: "Free for public repositories",
        description: "Host your own software packages or use them as dependencies in other projects. Both private and public hosting available."
      }
    ],
    addOns: {
      title: 'EXCLUSIVE ADD-ONS',
      features: [
        {
          text: 'GitHub Advanced Security',
          subtext: '',
          description: 'Automatically find and fix vulnerabilities before they are put into production. Get notified if your secrets have been exposed in your codebase.'
        },
        {
          text: 'Premium Support',
          subtext: '',
          description: 'With Premium, get a 30-minute SLA on Urgent tickets and 24/7 web and phone support via callback request. With Premium Plus, get everything in Premium, assigned Customer Reliability Engineer and more.'
        }
      ]
    }
  }
};

        
`
}

export default code;