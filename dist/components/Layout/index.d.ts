import React from 'react';
import { Metadata } from '../../types';
interface LayoutProps {
    children: React.ReactNode;
    metadata: Metadata;
    currentSlide: number;
    totalSlides: number;
}
declare const Layout: ({ children, metadata, currentSlide, totalSlides }: LayoutProps) => JSX.Element;
export default Layout;
