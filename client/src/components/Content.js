
import React from 'react'
import { Card, CardImg } from 'reactstrap';

export default function Content() {
    return (
        <div className="movie-container">
            <Card className="content_cover" inverse>
                <CardImg width="30%" src="/../../image/missionimpossible.jpg" alt="Card image cap" />
            </Card>
            <Card className="content_cover" inverse>
                <CardImg width="30%" src="../../image/antman.jpg" alt="Card image cap" />
                
            </Card>
            <Card className="content_cover" inverse>
                <CardImg width="30%" src="../../image/avengers.jpg" alt="Card image cap" />
            
            </Card>
       </div>
    )
}

  
