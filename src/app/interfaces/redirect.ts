export interface redirect {
    [key: string]: redirectProperties
}

export interface redirectProperties {
    background_url: string
    project_name: string
    redirect_to: string
}
