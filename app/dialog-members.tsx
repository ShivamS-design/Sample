import { Input } from '@/components/ui/input'
import './style.css'
import { Card } from '@/components/ui/card'
import { GoTriangleRight } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { FaCommentAlt } from "react-icons/fa";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";


export default function DialogMembers(){
    return(

        <div className='p-[20px]'>
            <h3 style={{fontWeight:'bold'}}>Members</h3>

            <div className='search-bar-members'>
                <Input type='text' className='h-[30px]' placeholder='Search members...' /> 
                <Card className='w-[100px] h-[30px]' style={{paddingLeft:'3px',paddingRight:'3px',fontSize:'11px',cursor:'pointer',paddingTop:'5px',display:'grid',gridTemplateColumns:'1fr 0.1fr'}}>
                    <p>Add developer</p> <GoTriangleRight />
                </Card>
            </div>


            <ul className='list-menu-items mt-[30px]' style={{width:'300px'}}>

            <li  className='menu-item' style={{textAlign:'left'}} >
   <div style={{width:'6px',height:'6px',background:'#F24822',borderRadius:'100px',marginTop:'5px'}}/>

       <p className='menu-item-text ml-[28px]'>Frontend</p>
       <div className='menu-item-icon-right'>
       <FaHeart style={{transform:'scale(0.5,0.5'}} className='menu-item-icon'/> 

       </div>

   </li>


   <li  className='menu-item' style={{textAlign:'left'}}>
   <Avatar className='w-[11px] h-[11px] ml-[-5px] mt-[8px]'>
                <AvatarImage  src="https://github.com/shadcn.png" alt="user chat icon" />
            </Avatar>
       <div className='ml-[28px]' style={{display:'grid',gridTemplateColumns:'1fr'}}>
       <p className='menu-item-text '>Sophia Carter</p>
       <p className='menu-item-text' style={{fontSize:'9px',opacity:'0.64'}}>sophia@gmail.com</p>
       </div>
       <div className='menu-item-icon-right ml-[120px]'>
       <IoEllipsisHorizontalSharp style={{transform:'scale(0.9,0.9'}} className='menu-item-icon'/> 

       </div>

   </li>

   <li  className='menu-item' style={{textAlign:'left'}}>
   <div style={{width:'6px',height:'6px',background:'#00B562',borderRadius:'100px',marginTop:'5px'}}/>

       <p className='menu-item-text ml-[28px]'>Backend</p>
       <div className='menu-item-icon-right'>
       <FaHeart style={{transform:'scale(0.5,0.5'}} className='menu-item-icon'/> 

       </div>

   </li>

   <li  className='menu-item' style={{textAlign:'left'}}>
   <div style={{width:'6px',height:'6px',background:'#0C8CE9',borderRadius:'100px',marginTop:'5px'}}/>

       <p className='menu-item-text ml-[28px]'>Cybersec</p>
       <div className='menu-item-icon-right'>
       <FaHeart style={{transform:'scale(0.5,0.5'}} className='menu-item-icon'/> 

       </div>

   </li>

   </ul>

        </div>

    )
}