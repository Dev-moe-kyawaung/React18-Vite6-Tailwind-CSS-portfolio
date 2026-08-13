import { Link } from "react-router-dom";

export default function Button({
  children,
  href,
  to,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles = {
    primary:
      "bg-cyan-300 text-slate-950 hover:bg-cyan-200",
    secondary:
      "border border-white/15 bg-white/5 text-white hover:border-cyan-300/50 hover:bg-white/10"
  };

  const classes = `focus-ring inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  );
}
