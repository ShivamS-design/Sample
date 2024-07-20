import { Card } from "@/components/ui/card";
import './style.css'
export default function AddedDevelopers(){
    return(
       <div style={{display:'grid',gridTemplateColumns:'1fr',padding:'6px'}}>
         <Card className="task-layout mt-[20px]">
        <p style={{opacity:'0.7',fontSize:'11px',fontFamily:'sans-serif'}}>xxxx</p>
        <h5 className="mt-[9.5px]" style={{opacity:'0.79',fontFamily:'sans-serif',fontWeight:'bold'}}>xxxxx</h5>
        
        <p className="mt-[9.5px]" style={{opacity:'0.5',fontFamily:'sans-serif',fontSize:'13px'}}>
        xxxx

        </p>

        <div className="footer-view">
        <div className="avatar-footer-view" style={{flex:'1',cursor:'pointer'}}>
        
    
        xxxxx
        
        </div>
        <p className="ml-[-10px]" style={{color:'black',fontSize:'12px',flex:'0.5',textAlign:'left'}}>xxxx</p>

        <p className="ml-[-20px]" style={{color:'rgba(12, 140, 233,0.8)',fontSize:'12px',flex:'0.5',textAlign:'left'}}>xxxxxxx</p>
        </div>
    </Card>
       </div>
    )
}