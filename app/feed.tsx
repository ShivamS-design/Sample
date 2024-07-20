import { Input } from '@/components/ui/input';
import FeedbackChats from './feeback-chats';
import './style.css'
import { FaSort } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FaMarkdown } from "react-icons/fa6";
import { FaFileArrowUp } from "react-icons/fa6";
import { FaPollH } from "react-icons/fa";




export default function Feed(){

    const feedbacks = [
        {
            id:0,
            reactions:[
                {id:0, type:'thumbs_up', index:2, selected:false},
                {id:1, type: 'cancel', index:1, selected:true},
            ],
            polls:[
                {
                    poll_id:0, 
                    poll_title:'Remove him', 
                    poll_counter: 20, 
                    poll_check: false, 
                    poll_progress: 30
                },
                {
                    poll_id:1, 
                    poll_title:'Pardon him', 
                    poll_counter: 10, 
                    poll_check: true, 
                    poll_progress: 20
                }],
                replies:[],
            message: '@John rugiz Please ensure that all security protocols are in place before the next phase. Double check compliance with GDPR and other relevant regulations to avoid any legal issues. Can we so have an update on the progress by the end of the week?'      
        },
        {
            id:1,
            reactions:[
              
            ],
            polls:[
              ],
              replies:[
                {
                    id:0,
                    message:'PLS Nooooo',
                    name:'Olivia Patel'
                }
              ],
            message: '@John rugiz am sorry pls'      
        }
    ]

    return(
        <div style={{display:'flex',flexDirection:'column',height:'100%'}}>

             <div className='feed-top-bar'>
                <div style={{paddingLeft:'20px',paddingTop:'22px',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <h3 style={{flex:'1',fontSize:'16px'}}>Feed<FaSort style={{opacity:'0.8',flex:'1',alignSelf:'flex-start',transform:'translateY(-20px) translateX(50px)'}} /></h3>
                    

                </div>
             </div>


             <div className='feedback-view'>

                {
                    feedbacks.map((message, index) => <FeedbackChats key={index} replies = {message.replies} polls = {message.polls} reactions = {message.reactions} message_text = {message.message}/>)
                }
                

             </div>

             <div className='feed-footer '>
             <Input type="text" className='ml-[10px] w-[100%]' placeholder="Send a message..." />
            
             <Popover>
      <PopoverTrigger asChild>
       <FaPlus style={{opacity:'0.7',cursor:'pointer',fontSize:'20px',color:'black',fontWeight:'bold',marginTop:'10px',transform:'scale(0.5, 0.5) translateX(-30px)'}}/>
      </PopoverTrigger>
      <PopoverContent style={{padding:0,margin:0}} className="w-[146px]">
        <div className="">
        <ul className='list-menu-items' style={{padding:'2px'}}>

                

<li className='menu-item'>
    
    <FaFileArrowUp className='menu-item-icon'/>
    <p style={{fontSize:'13px'}} className='menu-item-text ml-[23px]'>Upload file</p>
    <div className='menu-item-icon-right'>

    </div>

</li>


<li className='menu-item'>
    
    <FaPollH className='menu-item-icon'/>
    <p style={{fontSize:'13px'}} className='menu-item-text ml-[23px]'>Create poll</p>
    <div className='menu-item-icon-right'>

    </div>

</li>
</ul>
          
        </div>
      </PopoverContent>
    </Popover>
      
     
      <p style={{fontSize:'10px',textAlign:'left'}}> 
        <FaMarkdown style={{position:'absolute'}}  className='ml-[14px] mt-[2px]'></FaMarkdown> 
       <b className='ml-[30px]' style={{opacity:'0.7'}}> Markdown is supported</b></p>
             </div>

        </div>
    )
}
