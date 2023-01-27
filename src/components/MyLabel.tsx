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
  allCaps: boolean,
  /**
   * Color del boton
   */
  color: 'primary' | 'secondary' | 'tertiary';
/**
 * Color personalizado de la fuente
 */
  fontColor?: string;
}


export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No Label',
  size = 'normal',
  fontColor
}: Props) => {
  return (
    <span className={`label ${size} text-${color}`}
                    style={{ color: fontColor}}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
