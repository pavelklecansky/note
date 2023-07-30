create table note(
    id uuid primary key default gen_random_uuid(),
    content text not null,
    created_at timestamp with time zone not null default current_timestamp,
    updated_at timestamp with time zone  not null default current_timestamp
);