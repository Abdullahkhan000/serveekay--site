"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
export function ReferenceNav(){
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const scroll=()=>setScrolled(window.scrollY>60);const escape=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};scroll();window.addEventListener("scroll",scroll,{passive:true});window.addEventListener("keydown",escape);return()=>{window.removeEventListener("scroll",scroll);window.removeEventListener("keydown",escape)}},[]);
  return <header className={`ref-nav ${scrolled?"is-scrolled":""} ${open?"is-open":""}`}><div className="ref-nav-inner"><Link className="ref-logo" href="/" onClick={()=>setOpen(false)}>serveekay.</Link><button className="ref-menu-toggle" aria-expanded={open} aria-controls="ref-menu" onClick={()=>setOpen(!open)}>{open?"Close":"Menu"} <span>{open?"×":"☰"}</span></button><nav id="ref-menu" aria-label="Main navigation"><Link href="/services" onClick={()=>setOpen(false)}>Services</Link><Link href="/work" onClick={()=>setOpen(false)}>Selected work</Link><Link href="/#process" onClick={()=>setOpen(false)}>Process</Link><Link className="ref-nav-contact" href="/start-a-project" onClick={()=>setOpen(false)}>Contact</Link></nav></div></header>;
}
