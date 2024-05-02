export function formatDate(date: any, local: any) {
  const d = new Date(date)
  const options: any = { year: "numeric", month: "short", day: "numeric" }
  const res = d.toLocaleDateString(local, options)
  return res
}

export function execTemplate(
  template: string,
  vars: Record<string, string>
): string {
  return template.replaceAll(/\{(\S+?)}/g, (_, p) => vars[p] || p)
}
