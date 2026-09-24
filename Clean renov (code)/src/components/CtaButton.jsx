import { ArrowRightIcon } from "./Icons";

export default function CtaButton({
  as: Tag = "a",
  variant = "gold",
  text,
  icon: Icon = ArrowRightIcon,
  className = "",
  ...props
}) {
  return (
    <Tag className={`btn btn-${variant} cta-btn ${className}`.trim()} {...props}>
      <span className="cta-btn-dot" aria-hidden="true" />
      <span className="cta-btn-label">{text}</span>
      <span className="cta-btn-label-hover" aria-hidden="true">
        {text}
        <Icon />
      </span>
    </Tag>
  );
}
