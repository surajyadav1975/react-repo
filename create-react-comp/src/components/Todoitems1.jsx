import styles from './todoitem.module.css'

function Todoitems({duename, duedate,handleclickdelete}) {
  
    return (
      <div className={styles.container}>
        <div className={`row ${styles.kgrow}`}>
          <div className={`col-6`}>{duename}</div>
          <div className="col-4">{duedate}</div>
          <div className="col-2">
            <button type="button" className={`btn btn-danger`}
            onClick={()=>handleclickdelete(duename)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Todoitems;