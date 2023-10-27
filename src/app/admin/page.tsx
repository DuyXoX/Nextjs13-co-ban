'use client'
import { useRouter } from 'next/navigation';


const admin = () => {
    const router = useRouter()
    const btn_back = () => {    //chuyen trang "/" su dung thu vien import {useRouter}
        router.push("/")
    }
    return (
        <div>
            <div>Admin</div>
            <button onClick={() => btn_back()}>Back Home</button>
        </div>
    )
}

export default admin;