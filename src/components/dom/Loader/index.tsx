import styles from './Loader.module.css'

const Loader = ({ message, dotVariant = 1 }: { message?: string; dotVariant?: number }) => {
  return (
    <div className={styles.loader}>
      <h1 className={'text-6xl'}>{message ? message : 'Loading'}</h1>
      <div
        className={`${styles.dots} ${
          styles['dots-' + (dotVariant > 10 || dotVariant < 0 || !Number.isInteger(dotVariant) ? 1 : dotVariant)]
        }`}
      />
    </div>
  )
}
export default Loader
