import style from './loader.module.css'
import cn from 'classnames'

interface LoaderProps {
  className?:string;
}

export default function Loader({className}:LoaderProps) {
  return (
    <div className={cn(style.loader, className)}></div>
  )
}
