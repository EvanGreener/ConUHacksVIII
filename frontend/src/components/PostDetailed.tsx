import styles from "./PostDetailed.module.css";

const PostDetailed = () => {

  const title: string = "The Effects of High-Intensity Interval Training on Cognitive Function";
  const date: string = "November 18 2021";
  const body: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta non urna at maximus. In et nisi lacinia, lobortis nibh et, elementum tellus. Mauris tortor mauris, accumsan eget interdum in, blandit sed est. Vivamus condimentum nisl lacus, sit amet vehicula tortor mattis in. Maecenas pellentesque turpis vitae magna suscipit ultrices. Phasellus viverra feugiat magna, sit amet auctor arcu. Cras et lorem in massa mollis feugiat. Morbi finibus elit ac libero semper, sit amet varius metus venenatis. Curabitur faucibus sem sed felis viverra, id bibendum lectus mollis. Fusce a ipsum velit. Vivamus vitae finibus nunc.\n" +
    "\n" +
    "Vestibulum egestas nibh non libero sodales, et finibus tortor vulputate. Cras et odio enim. Pellentesque vehicula diam nibh, sit amet commodo orci pulvinar et. Praesent ut orci nibh. Nullam sit amet elementum massa, id imperdiet quam. Nunc accumsan mauris et nulla accumsan, in mollis nunc tristique. Proin cursus cursus nisl, sed auctor justo mattis sit amet. Proin sit amet neque hendrerit, eleifend ligula eget, molestie metus. Integer in scelerisque nulla, ut pharetra sem. Aenean consequat velit auctor aliquet lacinia. Integer convallis laoreet libero a tristique. Vivamus ornare mattis dictum. Vivamus placerat scelerisque finibus. Sed posuere mauris urna, ac pulvinar sapien cursus et. Nulla et mi at dolor rutrum pellentesque a ac neque.\n" +
    "\n" +
    "Quisque aliquet eu eros cursus facilisis. Ut fringilla, purus sed tristique iaculis, urna ligula congue augue, id accumsan orci metus vitae metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur tristique orci, sed volutpat sapien pretium ac. Maecenas efficitur, est sed molestie dapibus, arcu felis laoreet ex, et hendrerit metus tortor quis arcu. Curabitur diam ligula, aliquam quis lobortis ac, eleifend ut lectus. Praesent non metus cursus, mattis velit at, lacinia lacus. Ut magna lectus, vestibulum nec nulla non, mattis facilisis erat. Fusce vehicula ante in maximus sollicitudin. Nulla facilisi. Nullam iaculis nisi at commodo lobortis. Mauris ligula eros, euismod id eros non, luctus fringilla magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id mauris eu quam condimentum vestibulum.";
  const author: string = "Matteo Bob"
  const fundedAmount: number = 1893;
  const fundingGoal: number = 12300;
  const progressPercent: number = Math.min(fundedAmount / fundingGoal * 100, 100);

  return (
    <div className={styles.container}>
      <div className={styles.date}>{date}</div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.author}>{author}</div>
      <div className={styles.progressBarOuter}>
        {progressPercent == 100 ? (
          <div className={styles.progressBarInnerFull}></div>
        ) : (
          <div className={styles.progressBarInner} style={{width: `${progressPercent}%`}}></div>
        )}
      </div>
      <div className={styles.funding}>${fundedAmount} funded of ${fundingGoal} goal</div>
      <p className={styles.body}>{body}</p>
      <button type="button" className={styles.blockBtn}>Donate</button>
    </div>
  );
};

export default PostDetailed;
