 const code = {
    language: 'tsx',
    code: `'use client';

import './style.css'
import { useState } from "react";

import useOpenAI from "./useOpenAI";

const countries_region = ["Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antartica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",  "Caribbean Netherlands", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos(Keeling) Island", "Colombia", "Comoros", "Congo-Brazzaville", "Congo-Kinshasa", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Curacao", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", 
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea",
   "Guinea-Bissau", "Guyana", "Haiti", "Heard and McDonald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao SAR China", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", 
   "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Macedonia", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine Territories", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico",
  "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and Sandwich Islands", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Barthelemy", "St. Helena", "St. Kitts & Nevis", "St. Lucia", "St. Martin", "St. Pierre & Miquelon", "St. Vincent & Grenadines", "Sudan", "Suriname", "Svalbard & Jan Mayen",  "Sweden", "Switzerland", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
  "Turks & Caicos Islands", "Tuvalu", "U.S. Outlying Islands", "U.S. Virgin Islands", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Wallis & Futana", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"
];

const job_function = [
  "C-Suite", "Engineering and Technical", "FInance", "Education", "Customer Service", "Human Resources", "Information Technology", "Legal",
   "Marketing", "Operations", "Product", "Research", "Real Estate", "Recruiting", "Sales"
]

const job_level = [
  "C-Level", "VP/SVP/EVP", "Director", "Manager", "Non-Manager"
]

const company_size = [
  "<100", "100 - 1000", ">1000"
]

const payment_volume = [
  "None, just getting started", "less than $50k", "$50k to $150k", "$150k to $1m", "$1m to $5m", "more than $5m"
]

type UserData = {
  work_email?: string;
  country_region?: string;
  payment_volume?: string;
  company_size?: string;
  first_name?: string;
  last_name?: string;
  work_phone_number?: string;
  company_website?: string;
  job_function?: string;
  job_level?: string;
  anything_else?: string;
};

export default function Page() {
  const getCompletion = useOpenAI();

  const initialData:UserData = {
    work_email: '',
    country_region: '',
    payment_volume: '',
    company_size: '',
    first_name: '',
    last_name: '',
    work_phone_number: '',
    company_website: '',
    job_function: '',
    job_level: '',
    anything_else: '',
  };

  const [prompt, setPrompt] = useState('');
  const [formData, setFormData] = useState<UserData>(initialData);

  // Handle changes to any input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // Handle form submission
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    alert('form submitted')
    setFormData(initialData)
    setPrompt('')
  };

  type StatusType = {
    loading: boolean;
    error: boolean;
  };

  const [status, setStatus] = useState<StatusType>({loading: false, error: false})
  const sendPrompt = async () => {
    try {
      setStatus((prev:StatusType) => ({
        ...prev,
        loading: true
      }))

      if (prompt.length < 5){
        return;
      }

      const result = await getCompletion(prompt);
      
      if (result.error){
        return console.log('an error occured')
      }
    
      const object = JSON.parse(result.content ?? '{}');
    
      // Destructure with defaults
      const {
        work_email = "",
        country_region = "",
        payment_volume = "",
        company_size = "",
        first_name = "",
        last_name = "",
        work_phone_number = "",
        company_website = "",
        job_function = "",
        job_level = "",
        anything_else = ""
      }: UserData = object;

      setFormData({
        work_email: work_email, 
        country_region: country_region, 
        payment_volume:payment_volume,
        company_size: company_size,
        first_name: first_name,
        last_name: last_name,
        work_phone_number: work_phone_number,
        company_website: company_website,
        job_function: job_function,
        job_level: job_level,
        anything_else: anything_else
      })
      
    } catch (error) {
      //catch any possible error from the request
      console.error("Error fetching completion:", error);
    } finally {
      setStatus((prev:any) => ({
        ...prev,
        loading: false
      }))
    }
  }
    return (
      <main className="text-[#425466] bg-[#f6f9fc] p-3 sm:p-6">

        <div className="flex flex-col gap-y-3 sm:gap-y-6 md:justify-between md:flex-row w-full lg:w-[70%] mx-auto mt-[10%]">
          {/* Left side */}
          <div className="w-full  md:w-[40%]">
            <h1 className="text-[24px] sm:text-[48px] xl:text-[56px]  font-bold text-slate-900 mb-2 sm:mb-4">
              Help us route your inquiry
            </h1>
            <p className="text-base sm:text-[18px] text-slate-700">
              Setting up your own integration is the fastest and most efficient way to start using Stripe. However, if your business processes a high volume of payments and has advanced integration needs, our sales team would be happy to guide you. Tell us about your business and we&apos;ll get you to the right place.
            </p>
          </div>
  
          {/* Right side */}
          <div className="w-full md:w-[50%] flex-none shadow-md bg-white rounded-lg shadow-lg">
            <div className="p-6 border-b">
              <h2 className="text-base sm:text-[26px] font-bold mb-2">Let&apos;s get you to the right place</h2>
              <p className="text-base sm:text-[18px] text-gray-600">We just need a few quick details.</p>
            </div>

            {/*Prompt section */}
            <PromptForm prompt={prompt} setPrompt={setPrompt} sendPrompt={sendPrompt} status={status}/>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6 text-sm">
              <InputField title='Work email' type='email' name='work_email' onChange={handleChange} value={formData.work_email} placeholder='jane@example.com'/>
   
              <SelectField title='Country / Region' name='country_region' value={formData.country_region} onChange={handleChange} initialOption='Select a country' otherOptions={countries_region}/>
  
              <InputField title='First name' type='text' name='first_name' onChange={handleChange} value={formData.first_name} placeholder='Jane'/>
              
              <InputField title='Last name' type='text' name='last_name' onChange={handleChange} value={formData.last_name} placeholder='Diaz'/>
              
              <InputField title='Phone' type='tel' name='work_phone_number' onChange={handleChange} value={formData.work_phone_number} placeholder='+5 (555) 555-5555'/>
              
              <InputField title='Company website' type='url' name='company_website' onChange={handleChange} value={formData.company_website} placeholder='example.com'/>
  
              <SelectField title='Job function' name='job_function' value={formData.job_function} onChange={handleChange} initialOption='Select a job function' otherOptions={job_function}/>
              
              <SelectField title='Job level' name='job_level' value={formData.job_level} onChange={handleChange} initialOption='Select a job level' otherOptions={job_level}/>
              
              <SelectField title='Company size' name='company_size' value={formData.company_size} onChange={handleChange} initialOption='Select a range of employees' otherOptions={company_size}/>
              
              <SelectField title='Payment volume' name='payment_volume' value={formData.payment_volume} onChange={handleChange} initialOption='Select a monthly amount' otherOptions={payment_volume}/>
              
              <TextareaField title='Anything else?' name='anything_else' value={formData.anything_else} onChange={handleChange} />

              <div className="flex justify-between font-semibold pt-6">
                <button type="button">Back</button>
                <button type="submit" disabled={status.loading?true:false } className="px-3 py-1.5 bg-[#635bff] text-white rounded-full">Submit</button>
              </div>
  
              <p className="text-xs text-gray-500 text-center">Stripe will handle your data pursuant to its Privacy Policy</p>
            </form>
          </div>
        </div>
      </main>
    );
}

  function Spinner(){
    return (
      <div className="animate-spin rounded-full h-[20px] w-[20px] border-[5px] border-t-black border-[rgb(225,225,225)]"></div>
    )
}
 
type ChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;

// Types for PromptForm
interface PromptFormProps {
  prompt: string;
  setPrompt: (value: string) => void;
  sendPrompt: () => void;
  status: {
    loading: boolean;
    error?: boolean;
  };
}

function PromptForm({ prompt, setPrompt, sendPrompt, status }: PromptFormProps) {
  return (
    <div className="bg-white p-6 border-b text-sm sticky top-0">
      <div className="mb-2">
        <label htmlFor="prompt" className="font-semibold mr-auto">Prompt:</label>
        <p className="text-xs text-gray-500">Fill the form with natural language</p>
      </div>
      <div>
        <textarea 
          id="prompt" 
          name="prompt" 
          value={prompt} 
          onChange={(e) => setPrompt(e.target.value)} 
          required 
          rows={4} 
          className="w-full bg-[#f6f9fc] p-2 mb-2 border rounded" 
          placeholder="My name is Jane Diaz. My business website is example.com and it processes over $50k per month. i want to know if you can help setup a better payment integration."
        />
        <button 
          disabled={status.loading} 
          onClick={sendPrompt} 
          className="flex flex-row justify-center px-3 py-1.5 bg-[#635bff] font-semibold text-white rounded-full"
        >
          {status.loading ? <Spinner /> : <span>Send prompt</span>} 
        </button>  
      </div>
    </div>
  );
}

// Types for InputField
interface InputFieldProps {
  title: string;
  type: 'text' | 'email' | 'tel' | 'url' | 'number' | 'password';
  name: string;
  onChange: ChangeHandler;
  value: string | undefined;
  placeholder: string;
  required?: boolean;
}

function InputField({
  title,
  type,
  name,
  onChange,
  value='',
  placeholder,
  required = true
}: InputFieldProps) {
  return (
    <div className="flex flex-col justify-between sm:flex-row items-start mb-4">
      <label htmlFor={name} className="font-semibold mb-1">{title}</label>
      <input 
        type={type} 
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="flex-none w-full sm:w-[70%] bg-[#f6f9fc] p-2 border rounded" 
        placeholder={placeholder}
      />
    </div>
  );
}

// Types for SelectField
interface SelectFieldProps {
  title: string;
  name: string;
  value: string | undefined;
  onChange: ChangeHandler;
  initialOption: string;
  otherOptions: string[];
  description?: string | null;
  required?: boolean;
}

function SelectField({
  title,
  name,
  value='',
  onChange,
  initialOption,
  otherOptions,
  description = null,
  required = true
}: SelectFieldProps) {
  return (
    <div className="flex justify-between flex-col sm:flex-row items-start mb-4">
      <div className="font-semibold mb-1">
        <label htmlFor={name}>{title}</label>
        {description && (
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        )}
      </div>
      <div className="flex-none w-full sm:w-[70%] bg-[#f6f9fc] p-2 border rounded">
        <select 
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full bg-[#f6f9fc]"
        >
          <option>{initialOption}</option>
          {otherOptions.map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// Types for TextareaField
interface TextareaFieldProps {
  title: string;
  name: string;
  value: string | undefined;
  onChange: ChangeHandler;
  required?: boolean;
  rows?: number;
  placeholder?: string;
}

function TextareaField({
  title,
  name,
  value = '',
  onChange,
  required = false,
  rows = 4,
  placeholder = "Tell us more about your project, needs, and timeline"
}: TextareaFieldProps) {
  return (
    <div className="flex justify-between flex-col sm:flex-row items-start mb-4">
      <div className="font-semibold mb-1">
        <label htmlFor={name} className="font-semibold mr-auto">{title}</label>
        <p className="text-xs text-gray-500">Optional</p>
      </div>
      <div className="w-full sm:w-[70%] flex-none">
        <textarea 
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows} 
          className="w-full bg-[#f6f9fc] p-2 border rounded" 
          placeholder={placeholder}
        />
        <div className="flex items-start gap-2">
          <input type="checkbox" />
          <label className="text-gray-600 text-xs">
            Get emails from Stripe about product updates, industry news, and events. 
            If you change your mind, you can unsubscribe at any time.
          </label>
        </div>
      </div>
    </div>
  );
}
  
//useOpenAI.ts
function useOpenAI() {

const getCompletion = async (prompt: string) => {
  try {
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return { error: "Something went wrong" };
  }
};

return getCompletion;
}

export default useOpenAI;

//api/openai/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import instruction from '@/app/prompt';

const API_KEY = process.env.API_KEY || ''; 

const openai = new OpenAI({ apiKey: API_KEY });

export async function POST(request: Request) {
  //rate limiting and authorization algorithms should be implemented here
  
  try {
    const { prompt } = await request.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: 'system', content: 'follow the instruction provided by the user' },
        { role: 'user', content: \`\${instruction}. message:\${prompt}\`}
      ]
    });

    return NextResponse.json(completion.choices[0].message);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
`



}

export default code;