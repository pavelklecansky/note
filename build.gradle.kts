plugins {
	java
	id("org.springframework.boot") version "3.1.2"
	id("io.spring.dependency-management") version "1.1.2"
	id("dev.hilla") version "2.1.4"
	id("com.diffplug.spotless") version "6.18.0"
	id("org.flywaydb.flyway") version "9.8.1"
}

group = "cz.klecansky"
version = "0.0.1-SNAPSHOT"

val hillaVersion = "2.1.4"

val dbUrl = System.getenv("DB_URL") ?: "jdbc:postgresql://localhost:5432/postgres"
val dbUser = System.getenv("DB_USER") ?: "postgres"
val dbPassword = System.getenv("DB_PASSWORD") ?: "postgres"
val dbDriver = "org.postgresql.Driver"


java {
	sourceCompatibility = JavaVersion.VERSION_17
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("dev.hilla:hilla-react-spring-boot-starter")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.flywaydb:flyway-core")
	runtimeOnly("org.postgresql:postgresql")
	developmentOnly("org.springframework.boot:spring-boot-devtools")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	testImplementation("org.springframework.boot:spring-boot-testcontainers")
	testImplementation("org.testcontainers:junit-jupiter")
	testImplementation("org.testcontainers:postgresql:1.18.3")
}

dependencyManagement {
	imports {
		mavenBom("dev.hilla:hilla-bom:$hillaVersion")
	}
}

spotless {
	java {
		target("src/*/java/**/*.java")
		toggleOffOn()
		palantirJavaFormat()
		removeUnusedImports()
		trimTrailingWhitespace()
		endWithNewline()
	}
}

flyway {
	url = dbUrl
	user = dbUser
	password = dbPassword
	cleanDisabled = false
}


tasks.withType<Test> {
	useJUnitPlatform()
}
