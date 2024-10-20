'use client';

// Import komponen yang diperlukan
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, ArrowRight, MessageSquare } from 'lucide-react';

const Form = () => {
    return (
        <form className="flex flex-col gap-y-4">
            <div className="relative flex items-center">
                <Input type="name" id="name" placeholder="Name" />
                <User className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Input type="email" id="email" placeholder="Email" />
                <Mail className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Textarea placeholder="Type Your Message Here." />
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button className="flex items-center gap-x-1 max-w-[166px]">
                Let's Talk <ArrowRight size={20} />
            </Button>
        </form>
    );
};

export default Form;
