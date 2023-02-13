/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
      *Tipo de dato
     */
    label: string;
    /**
     *Seleccione el tamaño del componente
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Si o No
     */
    allCaps: boolean;
    /**
     * Color del boton
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor }: Props) => JSX.Element;
