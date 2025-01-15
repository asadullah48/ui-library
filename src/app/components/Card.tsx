import Link from "next/link"
import Image from "next/image"

type ProjectProps = {
    href: string,
    imageSrc: string,
    title: string,
    alt: string
}
interface CardProps {
    project: ProjectProps
}
export default function Card({project}:CardProps){
    return (
        <Link 
            href={project.href}
            className="block w-full text-black transition-transform hover:scale-[1.02]"
          >
            <div className="bg-gray-100 rounded-lg p-1.5 h-full">
              <div className="relative w-full aspect-square">
                <Image
                  src={project.imageSrc}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         (max-width: 1536px) 25vw,
                         20vw"
                  className="object-cover rounded-md"
                />
              </div>
              <p className="font-bold text-center text-base py-1 lg:py-2 ">
                {project.title}
              </p>
            </div>
          </Link>
    )
}