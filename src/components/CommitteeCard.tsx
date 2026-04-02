import { motion } from "framer-motion";

interface MemberInfo {
  name: string;
  role?: string;
  avatar?: string;
  linkedin?: string;
}

interface CommitteeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  members?: MemberInfo[];
  showMemberCount?: boolean;
  onViewMembers?: () => void;
}

const CommitteeCard = ({ title, description, icon, members = [], showMemberCount = false, onViewMembers }: CommitteeCardProps) => {
  const visibleMembers = members.slice(0, 3);
  const remainingMembers = members.length - visibleMembers.length;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className="relative group p-6 rounded-2xl glass glass-hover card-shadow transition-all hover:card-shadow-hover h-full"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        {showMemberCount && (
          <div className="absolute top-3 right-3 rounded-full bg-slate-100/80 text-sm font-semibold text-slate-700 px-3 py-1 shadow-sm">
            {members.length} Members
          </div>
        )}

        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
          {icon}
        </div>

        <h3 className="heading-md text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>

        <div className="flex items-center mb-6">
          <div className="flex -space-x-2">
            {visibleMembers.map((member, idx) => (
              <img
                key={member.name}
                src={member.avatar ?? `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0D8ABC&color=fff`}
                alt={member.name}
                className={`w-8 h-8 rounded-full border-2 border-white shadow-sm ${idx === 0 ? "z-30" : idx === 1 ? "z-20" : "z-10"}`}
              />
            ))}
            {remainingMembers > 0 && (
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-xs font-semibold text-slate-700 border-2 border-white z-0">
                +{remainingMembers}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={onViewMembers}
          className="w-full py-2.5 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-medium transition-all active:scale-95 hover:bg-primary/90"
        >
          View Members
        </button>
      </div>
    </motion.div>
  );
};

export default CommitteeCard;
