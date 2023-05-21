import './Skeleton.css';

interface SkeletonProps {
  key?: number;
  classes: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ classes }) => {
  const classNames = `skeleton ${classes} animate-pulse`;

  return <div className={classNames}></div>;
};
export default Skeleton;
