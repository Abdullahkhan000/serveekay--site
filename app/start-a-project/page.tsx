import {serviceMessaging} from "@/data/site";
import {StartPage} from "@/components/business-site";export const metadata={title:"Start a project",description:serviceMessaging.description,alternates:{canonical:"/start-a-project"}};export default async function Start({searchParams}:{searchParams:Promise<{service?:string}>}){const {service}=await searchParams;return <StartPage service={service}/>}
