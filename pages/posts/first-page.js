import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h2>Introduction of myself </h2>
            <p>
            1. My name is Lee Ji-hwan.<br/>
            2. I'm 20 years old.<br/>
            3. I'm living in Gangbuk-gu, Seoul.<br/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Seoul_Gangbuk-gu.svg/270px-Seoul_Gangbuk-gu.svg.png" alt="gangbuk"></img><br/>
            4. My MBTI type is <strong>ESFP!</strong><br/>
            <ul>
                <li>It can be explained by just a word,<strong>a free-spirited entertainer</strong></li>
                <li>Sociable and active</li>
                <li>Sometimes sensitive and impulsive</li>
                <li>When in community, I use my abilities better than when alone. </li>
            </ul>
            * If you want to get more informations, click <a href="https://post.naver.com/viewer/postView.nhn?volumeNo=30039805&vType=VERTICAL">this link</a>
            </p>
            <p>5. My hobbies are ...</p>
            <ul>
                <li>playing the piano</li>
                <li>going a trip alone</li>
                <li>talking with new people</li>
                
            </ul>
            <img src="https://health.chosun.com/site/data/img_dir/2020/03/13/2020031302009_0.jpg" alt = "piano"></img>
            <img src="https://cdn.pressian.com/_resources/10/2021/06/09/2021060911533184690_l.jpg" alt = "trip"></img><br/>
            
            <Link href="/">Back to home</Link> //GO TO "/"(MAIN PAGE)
        </div>
       
        
    )
}