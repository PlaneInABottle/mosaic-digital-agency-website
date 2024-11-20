import { useTranslations } from 'next-intl';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
    const t = useTranslations('common');
    const generalT = useTranslations('common.general');

    return (
        <footer className="border-t border-border bg-background">
            <div className="container py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-medium">Mosaic Digital Agency</h3>
                        <p className="max-w-md text-sm text-muted-foreground">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">{t('footer.contactUs')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`mailto:${generalT('email')}`}
                                    className="flex items-center space-x-3 text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <Mail className="h-5 w-5" />
                                    <span>{generalT('email')}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`tel:${generalT('phone').replace(/\s/g, '')}`}
                                    className="flex items-center space-x-3 text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>{generalT('phone')}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-border pt-8">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} {t('footer.allRightsReserved')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
