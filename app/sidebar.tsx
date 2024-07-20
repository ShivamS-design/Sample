"use client";

import { Card } from '@/components/ui/card'
import './style.css'
import { FaSort } from "react-icons/fa6";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoIosCalendar } from "react-icons/io";
import { FaMap } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";
import { useState } from 'react';
import { VscSettings } from "react-icons/vsc";
import AddedDevelopers from './project-developers'
import { IoSettingsSharp } from "react-icons/io5";
import { IoMapOutline } from "react-icons/io5";
import { IoMap } from "react-icons/io5";
import { FaMoneyBills } from "react-icons/fa6";

import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { FaCommentAlt } from "react-icons/fa";
import { FaQuestionCircle  } from "react-icons/fa";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { PiUsersThreeFill } from "react-icons/pi";
import { PiUsersThreeLight } from "react-icons/pi";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import DialogMembers from './dialog-members';
import { IoSettings } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

import { BsSliders } from "react-icons/bs";

import { IoCalendarClear } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { AiOutlineDiscord } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { RiAccountPinCircleLine } from "react-icons/ri";



export default function Sidebar(){

    const [menuState, updateMenuState] = useState({
        dashboard: true,
        kanban: false,
        roadmap: false,
        billing: false,
        settings: false,
        account:false,
        connect_discord:false,
        preferrence: false,
        members:true,
        billing_dialog: false,
        documents_dialog: false
      })

      const [developerPage, updateDeveloperPage] = useState(false)
   
      
      function updateStateData(menu_name: string){
        updateDeveloperPage(false)
        let menu_items_array = [
          'dashboard', 
          'billing', 
          'roadmap',
          'settings',
          'kanban-item',
          
        ]
       for (let i = 0; i < menu_items_array.length; i++) {
  const element = document.getElementById(menu_items_array[i]);
  if (element) {
    element.classList.remove('active-menu');
  }
}

const activeElement = document.getElementById(menu_name);
if (activeElement) {
  activeElement.classList.add('active-menu');
}

      
        switch(menu_name){
          case 'kanban-item':

          updateMenuState({
            dashboard: false,
            kanban: true,
            roadmap: false,
            billing: false,
            settings: false,
            account: menuState.account,
            connect_discord: menuState.connect_discord,
            preferrence: menuState.preferrence,
            members:menuState.members,
            billing_dialog: menuState.billing_dialog,
            documents_dialog: menuState.documents_dialog
          })

            break

          case 'account':

            updateMenuState({
              dashboard: false,
              kanban: false,
              roadmap: false,
              billing: false,
              settings: false,
              account: true,
              connect_discord: false,
              preferrence: false,
              members: false,
              billing_dialog: false,
              documents_dialog: false
            })
  
              break
      
          case 'dashboard':
            updateMenuState({
              dashboard: true,
              kanban: false,
              roadmap: false,
              billing: false,
              settings: false,
              account: menuState.account,
              connect_discord: menuState.connect_discord,
              preferrence: menuState.preferrence,
              members:menuState.members,
              billing_dialog: menuState.billing_dialog,
              documents_dialog: menuState.documents_dialog
            })
            break
      
          case 'roadmap':
            updateMenuState({
              dashboard: false,
              kanban: false,
              roadmap: true,
              billing: false,
              settings: false,
              account: menuState.account,
              connect_discord: menuState.connect_discord,
              preferrence: menuState.preferrence,
              members:menuState.members,
              billing_dialog: menuState.billing_dialog,
              documents_dialog: menuState.documents_dialog
            })
            break
      
          case 'billing':
            updateMenuState({
              dashboard: false,
              kanban: false,
              roadmap: false,
              billing: true,
              settings: false,
              account: menuState.account,
              connect_discord: menuState.connect_discord,
              preferrence: menuState.preferrence,
              members:menuState.members,
              billing_dialog: menuState.billing_dialog,
              documents_dialog: menuState.documents_dialog
            })
            break
      
          case 'settings':
            updateMenuState({
              dashboard: false,
              kanban: false,
              roadmap: false,
              billing: false,
              settings: true,
              account: menuState.account,
              connect_discord: menuState.connect_discord,
              preferrence: menuState.preferrence,
              members:menuState.members,
              billing_dialog: menuState.billing_dialog,
              documents_dialog: menuState.documents_dialog
            })
            break

            case 'connect_discord':
              updateMenuState({
                dashboard: false,
                kanban: false,
                roadmap: false,
                billing: false,
                settings: false,
                account: false,
                connect_discord:true,
                preferrence: false,
                members:false,
                billing_dialog: false,
                documents_dialog: false
              })
              break

              case 'preferrence':
                updateMenuState({
                  dashboard: false,
                  kanban: false,
                  roadmap: false,
                  billing: false,
                  settings: false,
                  account: false,
                  connect_discord:false,
                  preferrence: true,
                  members:false,
                  billing_dialog: false,
                  documents_dialog: false
                })
                break

              case 'members':
                  updateMenuState({
                    dashboard: false,
                    kanban: false,
                    roadmap: false,
                    billing: false,
                    settings: false,
                    account: false,
                    connect_discord:false,
                    preferrence: false,
                    members:true,
                    billing_dialog: false,
                    documents_dialog: false
                  })
                  break

                  case 'billing_dialog':
                    updateMenuState({
                      dashboard: false,
                      kanban: false,
                      roadmap: false,
                      billing: false,
                      settings: false,
                      account: false,
                      connect_discord:false,
                      preferrence: false,
                      members:false,
                      billing_dialog: true,
                      documents_dialog: false
                    })
                    break
                    case 'documents_dialog':
                      updateMenuState({
                        dashboard: false,
                        kanban: false,
                        roadmap: false,
                        billing: false,
                        settings: false,
                        account: false,
                        connect_discord:false,
                        preferrence: false,
                        members:false,
                        billing_dialog: false,
                        documents_dialog: true
                      })
                      break

        }
      }
    return(

        <div className='sidebar-menu'>

            <Card className='w-[100%] h-[45px] project-title card'>
                <div className='project-title-icon h-[30px]'></div>
                <p className='project-title-text mt-[5px]'>Echoverse</p>
                <FaSort className='project-title-sort-icon mt-[5px]' />
            </Card>

            <ul className='list-menu-items mt-[10px]'>

                

                <li id='dashboard' className='menu-item active-menu' onClick={()=>updateStateData('dashboard')}>
                    
                    {menuState.dashboard? <GoHomeFill className='menu-item-icon'/> : <GoHomeFill className='menu-item-icon'/>}
                    <p className='menu-item-text ml-[23px]'>Dashboard</p>
                    <div className='menu-item-icon-right'>

                    </div>

                </li>


                <li id='kanban-item' className='menu-item' onClick={()=>updateStateData('kanban-item')}>
                {menuState.kanban? <IoCalendarClear  className='menu-item-icon'/> : <IoCalendarClear  className='menu-item-icon'/>}

                    <p className='menu-item-text ml-[19px]'>Kanban</p>
                    <div className='menu-item-icon-right'>
                        <Card className='w-[37px] h-[19px] mt-[-2.9px]'>
                            <p className='sticker-text'>K</p>
                        </Card>
                    </div>

                </li>


                <li id='roadmap' className='menu-item' onClick={()=>updateStateData('roadmap')}>
                {menuState.roadmap? <IoMap  className='menu-item-icon'/> : <IoMap  className='menu-item-icon'/>}

                    <p className='menu-item-text ml-[35px]'>Roadmap</p>
                    <div className='menu-item-icon-right'>
                        <Card className='w-[37px] h-[19px] mt-[-2.9px]'>
                            <p className='sticker-text'>K</p>
                        </Card>
                    </div>

                </li>


                <li id='billing' className='menu-item' onClick={()=>updateStateData('billing')}>
                    
                    {menuState.billing? <FaMoneyBills  className='menu-item-icon'/> : <FaMoneyBills  className='menu-item-icon'/>}

                    <p className='menu-item-text ml-[15px]'>Billing</p>
                    <div className='menu-item-icon-right'>
                        <div className='w-[37px] h-[19px] mt-[-2.9px]'>
                            
                        </div>
                    </div>

                </li>

                <li id='settings' className='menu-item' onClick={()=>updateStateData('settings')}>
                    {menuState.settings? <BsSliders  className='menu-item-icon'/>  :   <BsSliders  className='menu-item-icon'/>
 }

                    <p className='menu-item-text ml-[27px]'>Settings</p>
                    <div className='menu-item-icon-right'>
                        <div className='w-[37px] h-[19px] mt-[-2.9px]'>
                        </div>
                    </div>

                </li>

                

            </ul>

          
            <ul className='list-menu-items'>

<Dialog>
      <DialogTrigger asChild>
      <li className='menu-item-null' >
       <p style={{padding:'12px',opacity:'0.77',fontSize:'12px',fontFamily:'sans-serif'}} className='menu-item-text ml-[-34px] mt-[3px]'>Team</p>
       
       <IoEllipsisHorizontalSharp className='menu-item-icon' style={{transform:'translateY(18px) translateX(139px)',position:'absolute'}}/> 
       
       </li>       
       </DialogTrigger>
      <DialogContent style={{padding:'0px'}}>
        <div className='members-dialog'>

          <div className='memebers-dialog-side-view w-[190px]'>

            <p style={{opacity:'0.75',fontSize:'10px',fontFamily:'sans-serif'}}>Account</p>
            <ul className='list-menu-items'>

                

                <li id='account' style={{textAlign:'left'}}  className='menu-item mt-[12px]' onClick={()=>updateStateData('account')}>
                    
                    {menuState.account? <RiAccountPinCircleFill className='menu-item-icon'/> : <RiAccountPinCircleFill className='menu-item-icon'/>}
                    <p className='menu-item-text ml-[20px]'style={{fontSize:'10px'}}>Account</p>
                    <div className='menu-item-icon-right'>

                    </div>

                </li>

                <li id='connect_discord' style={{textAlign:'left'}} className='menu-item mt-[12px]' onClick={()=>updateStateData('connect_discord')}>
                    
                    {menuState.connect_discord? <BsDiscord className='menu-item-icon'/> : <BsDiscord className='menu-item-icon'/>}
                    <p className='menu-item-text ml-[20px]'style={{fontSize:'10px'}}>Connect Discord</p>
                    <div className='menu-item-icon-right'>

                    </div>

                </li>


                <li id='preferrence'style={{textAlign:'left'}}  className='menu-item mt-[12px]' onClick={()=>updateStateData('preferrence')}>
                    
                    {menuState.preferrence? <BsSliders className='menu-item-icon'/> : <BsSliders className='menu-item-icon'/>}
                    <p className='menu-item-text ml-[20px]' style={{fontSize:'10px'}}>Preferences</p>
                    <div className='menu-item-icon-right'>

                    </div>

                </li>

            </ul>

            <div style={{width:'1px',height:'15px'}}/>
            <p style={{opacity:'0.75',fontSize:'10px',fontFamily:'sans-serif'}}>Project</p>
            <ul className='list-menu-items'>

                

                <li id='members' style={{textAlign:'left'}}  className='menu-item  active-menu mt-[12px]' onClick={()=>updateStateData('members')}>
                    
                    {menuState.members? <PiUsersThreeFill className='menu-item-icon'/> : <PiUsersThreeFill className='menu-item-icon'/>}
                    <p className='menu-item-text ml-[20px]'style={{fontSize:'10px'}}>Members</p>
                    <div className='menu-item-icon-right'>

                    </div>

                </li>

                <li id='billing_dialog' style={{textAlign:'left'}} className='menu-item mt-[12px]' onClick={()=>updateStateData('billing_dialog')}>
                    
                    {menuState.billing_dialog? <IoCalendarClear className='menu-item-icon'/> : <IoCalendarClear className='menu-item-icon'/>}
                    <p className='menu-item-text ml-[20px]'style={{fontSize:'10px'}}>Billing</p>
                    <div className='menu-item-icon-right'>

                    </div>

                </li>


                <li id='documents_dialog'style={{textAlign:'left'}}  className='menu-item mt-[12px]' onClick={()=>updateStateData('documents_dialog')}>
                    
                    {menuState.documents_dialog? <IoDocumentText  className='menu-item-icon'/> : <IoDocumentText  className='menu-item-icon'/>}
                    <p className='menu-item-text ml-[20px]' style={{fontSize:'10px'}}>Documents</p>
                    <div className='menu-item-icon-right'>

                    </div>

                </li>

            </ul>

          </div>

            <div className='memebers-dialog-body-view'>

            { menuState.members? <DialogMembers /> : <div /> }
            { developerPage? <AddedDevelopers /> : <div /> }

            

          </div>

        </div>
      </DialogContent>
      </Dialog>


  

   

   <li  className='menu-item' >
   <div style={{width:'6px',height:'6px',background:'#F24822',borderRadius:'100px',marginTop:'5.1px'}}/>

       <p className='menu-item-text ml-[14px]'>Frontend</p>
       <div className='menu-item-icon-right'>
       <FaHeart style={{transform:'scale(0.5,0.5'}} className='menu-item-icon'/> 

       </div>

   </li>

  


   <li  className='menu-item' >
   <Avatar className='w-[11px] h-[11px] ml-[-5px] mt-[0px]'  style={{borderRadius:'100px'}}>
                <AvatarImage  src="https://github.com/shadcn.png" style={{borderRadius:'100px'}} alt="user chat icon" />
            </Avatar>
       <p className='menu-item-text ml-[19px]'>Sophia Carter</p>
       <div className='menu-item-icon-right'>
       <FaCommentAlt style={{transform:'scale(0.7,0.7'}} className='menu-item-icon'/> 

       </div>

   </li>

   <li  className='menu-item' >
   <div style={{width:'6px',height:'6px',background:'#00B562',borderRadius:'100px',marginTop:'5px'}}/>

       <p className='menu-item-text ml-[14px]'>Backend</p>
       <div className='menu-item-icon-right'>
       <FaHeart style={{transform:'scale(0.5,0.5'}} className='menu-item-icon'/> 

       </div>

   </li>

   <li  className='menu-item' >
   <div style={{width:'6px',height:'6px',background:'#0C8CE9',borderRadius:'100px',marginTop:'5px'}}/>

       <p className='menu-item-text ml-[14px]'>Cybersec</p>
       <div className='menu-item-icon-right'>
       <FaHeart style={{transform:'scale(0.5,0.5'}} className='menu-item-icon'/> 

       </div>

   </li>



   

</ul>


 <div style={{marginTop:'69px'}}>
 <ul className='mt-[20px] list-menu-items'>

<li  className='menu-item' >
<FaQuestionCircle  style={{transform:'scale(0.77,0.77'}} className='menu-item-icon'/> 

       <p className='menu-item-text ml-[-29px] mt-[-3px]'>Support</p>
       
      
   </li> 

   <li  className='menu-item' >
<MdOutlineSupervisedUserCircle  style={{transform:'scale(0.77,0.77'}} className='menu-item-icon'/> 

       <p className='menu-item-text ml-[-26px] mt-[-3px]'>Feedback</p>
       
      
   </li> 

   </ul>


<Card className='w-[100%] h-[45px] mt-[10px] project-title card'>
                <div className='user-title-icon'></div>
                <p className='user-title-text'>Aarav Saren</p>
                <FaSort className='user-title-sort-icon' />
            </Card>
 </div>


        </div>

    )
}
