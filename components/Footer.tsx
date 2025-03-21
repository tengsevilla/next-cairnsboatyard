import { Clock, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

export const Footer = () => {

    return (
        <footer className="bg-primary-dark text-primary-foreground py-10 border-t border-border">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Left - Useful Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Useful Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#" className="hover:text-secondary">
                                License Agreement
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-secondary">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-secondary">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Middle - Operations */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Operations</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-2">
                            <Clock className="w-5 h-5 text-white" />
                            <span>Monday - Friday: 8:00 AM - 6:00 PM</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Clock className="w-5 h-5 text-white" />
                            <span>Saturday: 9:00 AM - 4:00 PM</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Clock className="w-5 h-5 text-white" />
                            <span>Sunday: Closed</span>
                        </li>
                    </ul>
                </div>

                {/* Right - Contact Information */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-2">
                            <Phone className="w-5 h-5 text-white" />
                            <a href="tel:+123456789" className="hover:text-secondary">
                                +1 234 567 89
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Mail className="w-5 h-5 text-white" />
                            <a href="mailto:info@cainsboatyard.com" className="hover:text-secondary">
                                info@cainsboatyard.com
                            </a>
                        </li>
                    </ul>
                    {/* Social Media Links */}
                    <div className="flex space-x-4 mt-4">
                        <Link href="#" className="hover:text-secondary">
                            <Facebook className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="hover:text-secondary">
                            <Twitter className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="hover:text-secondary">
                            <Instagram className="w-6 h-6" />
                        </Link>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="text-center text-sm mt-8 border-t border-border pt-4">
                &copy; {new Date().getFullYear()} Cains Boat Yard. All rights reserved.
            </div>
        </footer>
    )
}