import { normalFont } from "./utils"

export default function TextContent({content}:{content:string}){
    return (
      <div>
        <div className={normalFont} dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
      </div>
    )
  }