import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    const t = useTranslations('common');

    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Mosaic Digital Agency</h3>
                        <p className="text-primary-foreground/80 text-sm">
                            {t('footer.description')}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-accent" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-accent" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">{t('footer.quickLinks')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/#home"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    {t('footer.links.home')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#services"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    {t('footer.links.services')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#about"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    {t('footer.links.about')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#contact"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    {t('footer.links.contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">{t('footer.contactUs')}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3 text-primary-foreground/80">
                                <Mail className="h-5 w-5" />
                                <span>{t('general.email')}</span>
                            </li>
                            <li className="flex items-center space-x-3 text-primary-foreground/80">
                                <Phone className="h-5 w-5" />
                                <span>{t('general.phone')}</span>
                            </li>
                            <li className="flex items-center space-x-3 text-primary-foreground/80">
                                <MapPin className="h-5 w-5" />
                                <span>{t('general.address')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-primary-foreground/10">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-primary-foreground/80">
                            © {new Date().getFullYear()} {t('footer.allRightsReserved')}
                        </p>
                        <div className="flex space-x-6 text-sm text-primary-foreground/80">
                            <a href="#" className="hover:text-primary-foreground">
                                {t('footer.privacyPolicy')}
                            </a>
                            <a href="#" className="hover:text-primary-foreground">
                                {t('footer.termsOfService')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
