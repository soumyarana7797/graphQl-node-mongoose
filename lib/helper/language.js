/* eslint-disable*/

module.exports = {
    incorrect_parameters() {
      const incorrect_parameters = {
        en: "Incorrect parameters",
        es: "Parámetros incorrectos",
        fr: "Paramètres invalides"
      }
      return incorrect_parameters
    },
    email_validation() {
      const email_validation = {
        en: "Please enter email or phone",
        es: "Por favor ingrese su correo electrónico o teléfono",
        fr: "Veuillez entrer votre courriel ou votre numéro de téléphone"
      }
      return email_validation
    },
    action_not_completed() {
      const action_not_completed = {
        en: "Action could not be completed",
        es: "La acción no pudo ser completada",
        fr: "l'action ne peut être validée"
      }
      return action_not_completed
    },
    enough_credit_not_available() {
      const enough_credit_not_available = {
        en: "Enough credit not available",
        es: "Suficiente crédito no disponible",
        fr: "Assez de crédit non disponible"
      }
      return enough_credit_not_available
    },
    email_exists() {
      const email_exists = {
        en: "User with this email id or phone is already existing",
        es: "El usuario con este correo electrónico o teléfono ya existe",
        fr: "L'utilisateur avec cet identifiant e-mail ou ce téléphone existe déjà"
      }
      return email_exists
    },
    phone_not_provided() {
      const phone_not_provided = {
        en: "Phone or email is not provided",
        es: "No se proporciona teléfono o correo electrónico",
        fr: "Le téléphone ou le courriel ne sont pas fournis"
      }
      return phone_not_provided
    },
    check_email() {
      const check_email = {
        en: "Please check the email.",
        es: "Por favor revise el correo electrónico.",
        fr: "Validé adresse email."
      }
      return check_email
    },
    signup_successful() {
      const signup_successful = {
        en: "SignUp Successful,Please verify your account.",
        es: "Registro exitoso, verifique su cuenta.",
        fr: "Inscription réussie, veuillez vérifier votre compte."
      }
      return signup_successful
    },
    account_activated() {
      const account_activated = {
        en: "Your account is already activated.",
        es: "Su cuenta ya está activada.",
        fr: "votre compte est déjà activé."
      }
      return account_activated
    },
    incorrect_key() {
      const incorrect_key = {
        en: "The email/phone or the otp is incorrect.",
        es: "El correo electrónico / teléfono o el otp es incorrecto.",
        fr: "L'email/téléphone ou l'otp est incorrect."
      }
      return incorrect_key
    },
    activation_failed() {
      const activation_failed = {
        en: "Account cannot be activated.",
        es: "La cuenta no se puede activar.",
        fr: "Le compte ne peut pas être activé"
      }
      return activation_failed
    },
    welcome_title() {
      const welcome_title = {
        en: "Welcome to RFT.",
        es: "Bienvenido a RFT.",
        fr: "Bienvenue sur RFT"
      }
      return welcome_title
    },
    welcome_body() {
      const welcome_body = {
        en: `You have received ${process.env.RFT_CREDIT} RFT credit points on successful registration.`,
        es: `Has recibido ${process.env.RFT_CREDIT} puntos de crédito RFT en el registro exitoso.`,
        fr: `Vous avez reçu ${process.env.RFT_CREDIT} Points de crédit RFT en cas d'inscription réussie.`
      }
      return welcome_body
    },
    socialid_required() {
      const socialid_required = {
        en: "Provide social id.",
        es: "Proporcionar identificación social.",
        fr: "Four,nir ID Social."
      }
      return socialid_required
    },
    social_failed() {
      const social_failed = {
        en: "New Social not added.",
        es: "Nuevo Social no agregado.",
        fr: "Nouveau Social non ajouté"
      }
      return social_failed
    },
    email_used_social() {
      const email_used_social = {
        en: "Email Id/Phone number entered is used for a Social Login. So OTP can not be generated.",
        es: "La identificación de correo electrónico/número de teléfono ingresado se usa para un inicio de sesión social. Así que la OTP no se puede generar.",
        fr: "Le numéro d'identification/téléphone de courriel entré est utilisé pour une connexion sociale. Donc OTP ne peut pas être généré."
      }
      return email_used_social
    },
    email_not_verified() {
      const email_not_verified = {
        en: "Either the mail/phone is not verified or incorrect.",
        es: "El correo electrónico/teléfono no está verificado o es incorrecto.",
        fr: "Soit le mail/téléphone n'est pas vérifié, soit il est incorrect."
      }
      return email_not_verified
    },
    otp_sent_email() {
      const otp_sent_email = {
        en: "Your otp has been sent to your email.",
        es: "Su otp ha sido enviado a su correo electrónico.",
        fr: "Votre otp a été envoyé à votre adresse email."
      }
      return otp_sent_email
    },
    incorrect_email() {
      const incorrect_email = {
        en: "Incorrect mail.",
        es: "Correo electrónico incorrecto.",
        fr: "Adresse email incorrecte."
      }
      return incorrect_email
    },
    otp_sent_phone() {
      const otp_sent_phone = {
        en: "Your otp has been sent to your phone.",
        es: "Tu otp ha sido enviada a tu teléfono.",
        fr: "Votre otp a été envoyé sur votre téléphone."
      }
      return otp_sent_phone
    },
    user_not_found() {
      const user_not_found = {
        en: "No user data found.",
        es: "No se encontraron datos de usuario.",
        fr: "Aucune données utlisateur trouvées."
      }
      return user_not_found
    },
    otp_verified() {
      const otp_verified = {
        en: "Otp Verified.",
        es: "Otp verificado.",
        fr: "Otp vérifié."
      }
      return otp_verified
    },
    incorrect_otp() {
      const incorrect_otp = {
        en: "The credential or the otp is incorrect.",
        es: "La credencial o el otp es incorrecto.",
        fr: "Le justificatif d'identité ou l'otp est incorrect."
      }
      return incorrect_otp
    },
    key_not_verified() {
      const key_not_verified = {
        en: "Either the mail/phone is not verified or incorrect.",
        es: "El correo / teléfono no está verificado o es incorrecto.",
        fr: "Soit le mail/téléphone n'est pas vérifié, soit il est incorrect."
      }
      return key_not_verified
    },
    // userteamActivity
    prizespan_not_found() {
      const prizespan_not_found = {
        en: "No Prizespan data found with this Id.",
        es: "No se encontraron datos de Prizespan con este nombre.",
        fr: "Aucune donnée sur le prix n'a été trouvée avec ce numéro d'identification."
      }
      return prizespan_not_found
    },
    team_created() {
      const team_created = {
        en: "Team created successfully.",
        es: "Equipo creado exitosamente.",
        fr: "Votre équipe est créée"
      }
      return team_created
    },
    no_data() {
      const no_data = {
        en: "No data found.",
        es: "Datos no encontrados.",
        fr: "Aucune donnée disponible."
      }
      return no_data
    },
    team_name_exists() {
      const team_name_exists = {
        en: "Name already exists.",
        es: "El nombre ya existe.",
        fr: "Ce noméxiste déjà."
  
        // "es" : "El nombre ya existe, aquí hay algunas sugerencias.",
        // "fr" : "Ce noméxiste déjà, voici quelques suggestions"
      }
      return team_name_exists
    },
    league_not_found() {
      const league_not_found = {
        en: "No League data found with this Id.",
        es: "No se han encontrado datos de Liga con este nombre.",
        fr: "Aucune donnée de ligue trouvée avec cette Id"
      }
      return league_not_found
    },
    formation_not_found() {
      const league_not_found = {
        en: "No formation data found with this Id.",
        es: "No se encontraron datos de formación con este Id.",
        fr: "Aucune donnée de formation trouvée avec cet ID."
      }
      return league_not_found
    },
    formation_saved() {
      const formation_saved = {
        en: "Formation Saved.",
        es: "Formación guardada.",
        fr: "Formation sauvegardée."
      }
      return formation_saved
    },
    changes_updated() {
      const changes_updated = {
        en: "Changes Already Updated.",
        es: "Cambios ya actualizados.",
        fr: "Changement déjà validés."
      }
      return changes_updated
    },
    something_went_wrong() {
      const something_went_wrong = {
        en: "Something went wrong.",
        es: "Algo salió mal.",
        fr: "Il y a eu un problème"
      }
      return something_went_wrong
    },
    formation_updated() {
      const formation_updated = {
        en: "Formation changed.",
        es: "Formacion cambiada.",
        fr: "Formation changée"
      }
      return formation_updated
    },
    invalid_request() {
      const invalid_request = {
        en: "Invalid Request.",
        es: "Solicitud no válida.",
        fr: "Demande non valide"
      }
      return invalid_request
    },
    no_records_found() {
      const no_records_found = {
        en: "No records match this search criteria.",
        es: "No hay registros que coincidan con este criterio de búsqueda.",
        fr: "Aucun enregistrement ne correspond à ce critère de recherche"
      }
      return no_records_found
    },
    social_provider_logged_in({ social_provider }) {
      const social_provider_looged_in = {
        en: `Sorry!! You are logged in with ${social_provider}`,
        es: `¡¡Lo siento!! Has iniciado sesión con ${social_provider}`,
        fr: `Désolé !!! Vous êtes connecté avec ${social_provider}`
      }
      return social_provider_looged_in
    },
    old_password_verfication() {
      const old_password_verfication = {
        en: "Old password does not match",
        es: "La contraseña antigua no coincide",
        fr: "L'ancien mot de passe ne correspond pas"
      }
      return old_password_verfication
    },
    password_update_success() {
      const password_update_success = {
        en: "Password updated successfully",
        es: "Contraseña actualizada exitosamente",
        fr: "nouveau mot de passe validé"
      }
      return password_update_success
    },
    please_try_again() {
      const please_try_again = {
        en: "Please,try again",
        es: "Inténtalo de nuevo",
        fr: "S'il vous plaît, réessayez."
      }
      return please_try_again
    },
    incorrect_credential_or_otp() {
      const incorrect_credential_or_otp = {
        en: "Incorrect credential or otp",
        es: "Credencial incorrecta u otp de nuevo",
        fr: "Identifiant ou otp incorrects"
      }
      return incorrect_credential_or_otp
    },
    verified_successfully() {
      const verified_successfully = {
        en: "verified successfully",
        es: "verificado exitosamente",
        fr: "vérification validée"
      }
      return verified_successfully
    },
    problem_with_access_token() {
      const problem_with_access_token = {
        en: "Problem with access token",
        es: "Problema con el token de acceso",
        fr: "Problème avec le jeton d'accès"
      }
      return problem_with_access_token
    },
    can_not_fetch_problem_with_access_token() {
      const can_not_fetch_problem_with_access_token = {
        en: "Can't fetch data,problem with access token",
        es: "No se pueden recuperar datos, problema con el token de acceso",
        fr: "Impossible de récupérer les données, problème avec le jeton d'accès"
      }
      return can_not_fetch_problem_with_access_token
    },
    account_has_been_deleted_successfully() {
      const account_has_been_deleted_successfully = {
        en: "Account has been deleted successfully",
        es: "La cuenta ha sido eliminada exitosamente",
        fr: "le compte a été supprimé"
      }
      return account_has_been_deleted_successfully
    },
    account_data_not_found() {
      const account_data_not_found = {
        en: "Account data not found",
        es: "Datos de cuenta no encontrados",
        fr: "Données du compte non trouvées"
      }
      return account_data_not_found
    },
    favorite_team_updated() {
      const favorite_team_updated = {
        en: "Favourite teams updated successfully",
        es: "Equipos favoritos actualizados con éxito",
        fr: "Equipe favorite mise à jour réussie"
      }
      return favorite_team_updated
    },
    changes_already_done() {
      const changes_already_done = {
        en: "The changes requested are already done",
        es: "Los cambios solicitados ya están hechos",
        fr: "Changement démandé déjà effectué"
      }
      return changes_already_done
    },
    invalid_prize_zone_Id() {
      const invalid_prize_zone_Id = {
        en: "Invalid prizeZoneId",
        es: "Premio inválido",
        fr: "PrizeZoneId invalide"
      }
      return invalid_prize_zone_Id
    },
    invalid_country() {
      const invalid_country = {
        en: "Invalid country",
        es: "País inválido",
        fr: "Pays invalide"
      }
      return invalid_country
    },
    saved_prize_zone() {
      const saved_prize_zone = {
        en: "PrizeZone saved",
        es: "PrizeZone guardado",
        fr: "PrizeZone sauvegardé"
      }
      return saved_prize_zone
    },
    prize_zone_already_exist() {
      const prize_zone_already_exist = {
        en: "PrizeZone already exists",
        es: "PrizeZone ya existe",
        fr: "PrizeZone existe déjà"
      }
      return prize_zone_already_exist
    },
    team_name_suggestion() {
      const team_name_suggestion = {
        en: "name already exist, here are some suggestion",
        es: "El nombre ya existe, aquí hay algunas sugerencias",
        fr: "Ce noméxiste déjà, voici quelques suggestions"
      }
      return team_name_suggestion
    },
    no_more_games_for_DFF() {
      const no_more_games_for_DFF = {
        en: "No more games for DFF",
        es: "No más juegos para DFF",
        fr: "Plus de jeux pour DFF"
      }
      return no_more_games_for_DFF
    },
    no_parameters_sent_to_update() {
      const no_parameters_sent_to_update = {
        en: "No parameters sent to update",
        es: "No hay parámetros enviados para actualizar",
        fr: "Aucun paramètre envoyé pour mettre à jour"
      }
      return no_parameters_sent_to_update
    },
    invalid_JSON() {
      const invalid_JSON = {
        en: "Invalid JSON",
        es: "JSON inválido",
        fr: "JSON invalide"
      }
      return invalid_JSON
    },
    successful_update() {
      const successful_update = {
        en: "successfully updated",
        es: "actualizado exitosamente",
        fr: "mise à jour réussie"
      }
      return successful_update
    },
    transfer_window_close() {
      const transfer_window_close = {
        en: "Transfer window is closed",
        es: "La ventana de transferencia está cerrada",
        fr: "La fenêtre de transfert est fermée"
      }
      return transfer_window_close
    },
    enough_RFTC_not_available() {
      const enough_RFTC_not_available = {
        en: "Enough RFTC not available",
        es: "Suficiente RFTC no disponible",
        fr: "RTFC non disponbile"
      }
      return enough_RFTC_not_available
    },
    incorrect_totalPrice() {
      const incorrect_totalPrice = {
        en: "Incorrect totalPrice",
        es: "Precio total incorrecto",
        fr: "Total Prix incorrecte"
      }
      return incorrect_totalPrice
    },
    player_is_already_leader() {
      const player_is_already_leader = {
        en: "Player is already selected as Leader",
        es: "El jugador ya está seleccionado como Líder",
        fr: "Joueur déjà sélectionné comme leader"
      }
      return player_is_already_leader
    },
    leader_saved() {
      const leader_saved = {
        en: "Leader Saved",
        es: "Líder salvado",
        fr: "Leader validé"
      }
      return leader_saved
    },
    lineups_not_available() {
      const lineups_not_available = {
        en: "Lineups not available",
        es: "Alineaciones no disponibles",
        fr: "Files d'attente non disponibles"
      }
      return lineups_not_available
    },
    player_data_not_found() {
      const player_data_not_found = {
        en: "Player data not found",
        es: "Datos del jugador no encontrados",
        fr: "Aucunes données joueurs trouvées"
      }
      return player_data_not_found
    },
    team_stats_not_found() {
      const team_stats_not_found = {
        en: "Team Statistics not available",
        es: "Estadísticas del equipo no disponibles",
        fr: "Statistiques par équipe non disponibles"
      }
      return team_stats_not_found
    },
    help_data_not_found() {
      const help_data_not_found = {
        en: "No help data found",
        es: "No se encontraron datos de ayuda",
        fr: "Aucune donnée d'aide trouvée"
      }
      return help_data_not_found
    },
    credit_packs_not_found() {
      const credit_packs_not_found = {
        en: "No credit packs data found",
        es: "No se encontraron datos de paquetes de crédito",
        fr: "Pas de données de packs de crédit trouvées"
      }
      return credit_packs_not_found
    },
    account_already_linked_with() {
      const account_already_linked_with = {
        en: "No credit packs data found",
        es: "No se encontraron datos de paquetes de crédito",
        fr: "Pas de données de packs de crédit trouvées"
      }
      return account_already_linked_with
    },
    player_details_not_found() {
      const player_details_not_found = {
        en: "Player details not found",
        es: "Detalles del jugador no encontrados",
        fr: "Détails du joueur introuvables"
      }
      return player_details_not_found
    },
    transfer_not_allowed() {
      const transfer_not_allowed = {
        en: "Transfer not allowed",
        es: "Transferencia no permitida",
        fr: "Transfert non autorisé"
      }
      return transfer_not_allowed
    },
    team_data_not_found() {
      const team_data_not_found = {
        en: "No team data found",
        es: "No se han encontrado datos del equipo",
        fr: "Aucunes données équipes trouvées"
      }
      return team_data_not_found
    },
    transfer_already_updated() {
      const transfer_already_updated = {
        en: "Transfer already updated",
        es: "Transferencia ya actualizada",
        fr: "Transfert déjà mis à jour"
      }
      return transfer_already_updated
    },
    budget_exceeding() {
      const budget_exceeding = {
        en: "Budget exceeding",
        es: "Presupuesto superior",
        fr: "Dépassement budgétaire"
      }
      return budget_exceeding
    },
    no_budget_data_found() {
      const budget_exceeding = {
        en: "No budget data found.",
        es: "No se encontraron datos de presupuesto.",
        fr: "Aucune donnée budgétaire trouvée."
      }
      return budget_exceeding
    },
    no_transfers_left() {
      const no_transfers_left = {
        en: "No transfers left to use",
        es: "No quedan transferencias para usar",
        fr: "Aucun transfert à utiliser"
      }
      return no_transfers_left
    },
    wrong_checksum_not_verified() {
      const wrong_checksum_not_verified = {
        en: "Wrong checksum. not verified",
        es: "Suma de comprobación incorrecta No verificado",
        fr: "Somme de contrôle erronée. Non vérifiée."
      }
      return wrong_checksum_not_verified
    },
    payment_process_completed_already() {
      const payment_process_completed_already = {
        en: "Payment process completed already",
        es: "Proceso de pago ya completado",
        fr: "Processus de paiement déjà terminé"
      }
      return payment_process_completed_already
    },
    no_gamespans_found() {
      const no_gamespans_found = {
        en: "League does not have any GameSpans",
        es: "Liga no tiene GameSpans",
        fr: "League n'a pas de GameSpans"
      }
      return no_gamespans_found
    },
    league_not_started() {
      const league_not_started = {
        en: "League has not yet started",
        es: "Nombre de la Liga aún no ha comenzado",
        fr: "La ligue n'a pas encore commencé"
      }
      return league_not_started
    },
    no_standings_found() {
      const no_standings_found = {
        en: "No team standings to show",
        es: "No hay posiciones del equipo para mostrar",
        fr: "Aucun classement d'équipe à montrer"
      }
      return no_standings_found
    },
    updation_successful() {
      const updation_successful = {
        en: "Updation successful",
        es: "actualización exitosa",
        fr: "Mise à jour réussie"
      }
      return updation_successful
    },
    insertion_successful() {
      const insertion_successful = {
        en: "insertion successful",
        es: "inserción exitosa",
        fr: "insertion réussie"
      }
      return insertion_successful
    },
    no_articles_found() {
      const no_articles_found = {
        en: "No articles found.",
        es: "No se encontraron artículos.",
        fr: "Aucun article trouvé."
      }
      return no_articles_found
    },
    referral_already_consumed() {
      const referral_already_consumed = {
        en: "Referral code already consumed",
        es: "Código de referencia ya consumido",
        fr: "Code de référence déjà utilisé"
      }
      return referral_already_consumed
    },
    referral_already_generated() {
      const referral_already_generated = {
        en: "Referral code already generated",
        es: "Código de referencia ya generado.",
        fr: "Code de référence déjà généré"
      }
      return referral_already_generated
    },
    referral_generated_success() {
      const referral_generated_success = {
        en: "Referral code generated successfully",
        es: "Código de referencia generado con éxito.",
        fr: "Code de référence généré avec succès"
      }
      return referral_generated_success
    },
    invalid_data() {
      const invalid_data = {
        en: "Invalid data",
        es: "Datos inválidos",
        fr: "Données invalides"
      }
      return invalid_data
    },
    invalid_transaction() {
      const invalid_transaction = {
        en: "Invalid transaction",
        es: "Transacción inválida",
        fr: "Transaction invalide"
      }
      return invalid_transaction
    },
    payment_already_completed() {
      const payment_already_completed = {
        en: "Payment process completed already",
        es: "Proceso de pago ya completado",
        fr: "Processus de paiement déjà terminé"
      }
      return payment_already_completed
    },
    payment_id_not_found() {
      const payment_id_not_found = {
        en: "Payment id not found",
        es: "Identificación de pago no encontrada",
        fr: "ID paiement invalide"
      }
      return payment_id_not_found
    },
    something_went_wrong_pending_payment_id_not_found() {
      const something_went_wrong_pending_payment_id_not_found = {
        en: "Something went wrong, pending payment id not found.",
        es: "Algo salió mal, pendiente de identificación de pago no encontrado.",
        fr: "Une erreur s'est produite, ID paiement non trouvée"
      }
      return something_went_wrong_pending_payment_id_not_found
    },
    group_created_successfully() {
      const group_created_successfully = {
        en: "Group created successfully.",
        es: "Grupo creado exitosamente.",
        fr: "Création de groupe réussie."
      }
      return group_created_successfully
    },
    league_name_already_exists() {
      const league_name_already_exists = {
        en: "Name exists in any of the leagues. Please choose another name.",
        es: "El nombre existe en cualquiera de las ligas. Por favor elige otro nombre.",
        fr: "Nom déjà existant dans un autre langue, choisir un autre nom."
      }
      return league_name_already_exists
    },
    group_updated_successfully() {
      const group_updated_successfully = {
        en: "Group updated successfully.",
        es: "Grupo actualizado correctamente.",
        fr: "Mise à jour du groupe réussie."
      }
      return group_updated_successfully
    },
    user_profile_updated_successfully() {
      const user_profile_updated_successfully = {
        en: "The user profile is updated successfully.",
        es: "El perfil de usuario se actualiza correctamente.",
        fr: "Le profil de l'utilisateur est mis à jour avec succès."
      }
      return user_profile_updated_successfully
    },
    no_group_updated_successfully() {
      const no_group_updated_successfully = {
        en: "No Group updated.",
        es: "No Grupo actualizado.",
        fr: "Pas de mise à jour groupe."
      }
      return no_group_updated_successfully
    },
    group_join_successfully() {
      const group_join_successfully = {
        en: "Group join successfully.",
        es: "Grupo unirse con éxito.",
        fr: "Ajout au groupe réussie."
      }
      return group_join_successfully
    },
    group_join_not_allowed() {
      const group_join_not_allowed = {
        en: "Group join not allowed.",
        es: "No se permite unirse al grupo.",
        fr: "Rejoindre groupe non disponible."
      }
      return group_join_not_allowed
    },
    group_left() {
      const group_left = {
        en: "You have left this group.",
        es: "Has dejado este grupo.",
        fr: "Vous avez quitté ce groupe."
      }
      return group_left
    },
    can_not_leave_group() {
      const can_not_leave_group = {
        en: "You can't leave your own group.",
        es: "No puedes dejar tu propio grupo.",
        fr: "Vous ne pouvez pas quitter votre propre groupe"
      }
      return can_not_leave_group
    },
    pending_payment_id_not_found() {
      const pending_payment_id_not_found = {
        en: "Something went wrong, pending payment id not found.",
        es: "Algo salió mal, pendiente de identificación de pago no encontrado.",
        fr: "Une erreur s'est produite, ID paiement non trouvée."
      }
      return pending_payment_id_not_found
    },
    pending_payment() {
      const pending_payment = {
        en: "Payment status pending",
        es: "Estado de pago pendiente",
        fr: "Statut du paiement en attente"
      }
      return pending_payment
    },
    no_payment_record_found() {
      const no_payment_record_found = {
        en: "No record payment found",
        es: "No se ha encontrado el pago de registro",
        fr: "Aucun paiement record trouvé"
      }
      return no_payment_record_found
    },
    transaction_successful() {
      const transaction_successful = {
        en: "Transaction successful",
        es: "Transacción exitosa",
        fr: "Transaction validée"
      }
      return transaction_successful
    },
    transaction_cancelled() {
      const transaction_cancelled = {
        en: "Transaction has been cancelled",
        es: "La transacción ha sido cancelada",
        fr: "La transaction a été annulée"
      }
      return transaction_cancelled
    },
    invalid_process() {
      const invalid_process = {
        en: "Invalid process",
        es: "Proceso inválido",
        fr: "Processus invalide"
      }
      return invalid_process
    },
    transaction_failed() {
      const transaction_failed = {
        en: "Transaction failed",
        es: "Transacción fallida",
        fr: "La transaction a échoué"
      }
      return transaction_failed
    },
    subscription_renew_notification_title() {
      const renew_notification_title = {
        en: "Congratulations",
        es: "Felicidades",
        fr: "Toutes nos félicitations"
      }
      return renew_notification_title
    },
    subscription_renew_notification_body() {
      const renew_notification_body = {
        en: "Your subscribed pack for Monthly subscription has been renewed through auto renewal process for ",
        es: "Su paquete suscrito para la suscripción mensual se ha renovado a través del proceso de renovación automática para ",
        fr: "Votre pack souscrit pour abonnement mensuel a été renouvelé par le processus de renouvellement automatique pour"
      }
      return renew_notification_body
    },
    subscription_cancel_notification_title() {
      const cancel_notification_title = {
        en: "Subscription Cancelled!",
        es: "Suscripción cancelada!",
        fr: "Abonnement annulé!"
      }
      return cancel_notification_title
    },
    subscription_cancel_notification_body() {
      const cancel_notification_body = {
        en: "Your Monthly subscription has been cancelled for ",
        es: "Su suscripción mensual ha sido cancelada por ",
        fr: "Votre abonnement mensuel a été annulé pour "
      }
      return cancel_notification_body
    },
    subscription_restart_notification_title() {
      const restart_notification_title = {
        en: "Subscription Update!",
        es: "Actualización de suscripción!",
        fr: "Mise à jour de l'abonnement"
      }
      return restart_notification_title
    },
    subscription_restart_notification_body() {
      const restart_notification_body = {
        en: "Your subscribed pack for Monthly subscription has been restarted for ",
        es: "Su paquete suscrito para la suscripción mensual se ha reiniciado por ",
        fr: "Votre pack souscrit pour abonnement mensuel a été redémarré pour "
      }
      return restart_notification_body
    },
    invalid_token_permission() {
      const invalid_token_permission = {
        en: "You are not permitted to access this API.",
        es: "No tienes permiso para acceder a esta API.",
        fr: "Vous n'êtes pas autorisé à accéder à cette API."
      }
      return invalid_token_permission
    },
    Oauth_invalid_user_credentials() {
      const Oauth_invalid_user_credentials = {
        en: "User credentials are invalid.",
        es: "Las credenciales de usuario no son válidas.",
        fr: "Les informations d'identification de l'utilisateur ne sont pas valides."
      }
      return Oauth_invalid_user_credentials
    },
    leagueEndMessage1() {
      const leagueEndMessage1 = {
        en: "Ongoing season is over! You can create your new ",
        es: "La temporada en curso ha terminado! Puedes crear tu nuevo ",
        fr: "La saison est terminée! Vous pouvez créer votre nouveau "
      }
      return leagueEndMessage1
    },
    leagueEndMessage2() {
      const leagueEndMessage2 = {
        en: "Fantasy team for the next season 15 days before the season starts.",
        es: "Equipo de fantasía para la próxima temporada 15 días antes de que comience la temporada.",
        fr: "L'équipe Fantasy pour la saison suivante 15 jours avant le début de la saison."
      }
      return leagueEndMessage2
    },
    rewardMessage() {
      const rewardMessage = {
        en: "REWARDS COMMING SOON",
        es: "REWARDS COMMING SOON",
        fr: "REWARDS COMMING SOON"
      }
      return rewardMessage
    },
    /*
    noSpanMessage:function(){
      var noSpanMessage = {
        "en": "This league is coming soon. Please stay tuned.",
        "es": "Esta liga llegará pronto. Por favor manténgase al tanto.",
        "fr": "Cette ligue arrive bientôt. S'il vous plaît restez à l'écoute."
      }
      return noSpanMessage;
    },
    */
    noSpanMessage() {
      const noSpanMessage = {
        en: "Please stay tuned with us till the upcoming fixtures have been declared.",
        es: "Estén atentos con nosotros hasta que se declaren los próximos partidos.",
        fr: "S'il vous plaît restez à l'écoute avec nous jusqu'à ce que les prochains matchs soient déclarés."
      }
      return noSpanMessage
    },
    formation({formation_id}) {
      if (formation_id == "4-5-1") {
        var description = {
          en: "The 4-5-1 Formation might not be a fascinating formation in the world of football with essentially a stable back four, one exclusive holding midfielder charged with breaking up play and a very hard working lone striker. The best examples include Jose Mourinho’s Chelsea and Alex McLeish’s Aston Villa.",
          es: "La Formación 4-5-1 podría no ser una formación fascinante en el mundo del fútbol, ​​esencialmente con un back cuatro estable, un mediocampista de retención exclusivo encargado de romper el juego y un delantero solitario muy trabajador. Los mejores ejemplos incluyen el Chelsea de Jose Mourinho y el Aston Villa de Alex McLeish.",
          fr: "La formation 4-5-1 n’est peut-être pas une formation fascinante dans le monde du football, avec essentiellement quatre arrières stables, un milieu de terrain exclusif chargé de rompre le jeu et un attaquant solitaire travaillant très dur. Les meilleurs exemples sont Chelsea de Jose Mourinho et Aston Villa d’Alex McLeish."
        }
      } else if (formation_id == "4-4-2") {
        var description = {
          en: "The 4-4-2 Formation has been widely used by the English football clubs over a decade, though many complain that the recent trends have slightly diminished it's effectiveness. The best club to utilize this ever dynamic formation was non other than Sir Alex Ferguson's Manchester United.",
          es: "La Formación 4-4-2 ha sido ampliamente utilizada por los clubes de fútbol ingleses durante una década, aunque muchos se quejan de que las tendencias recientes han disminuido ligeramente su efectividad. El mejor club para utilizar esta formación dinámica fue el Manchester United de Sir Alex Ferguson.",
          fr: "La formation 4-4-2 a été largement utilisée par les clubs de football anglais pendant une décennie, bien que beaucoup se plaignent du fait que les tendances récentes ont légèrement diminué son efficacité. Le meilleur club à utiliser cette formation dynamique n’est autre que le Manchester United de Sir Alex Ferguson."
        }
      } else if (formation_id == "4-1-4-1") {
        var description = {
          en: "The 4-1-4-1 Formation stems from either the 4-3-3 or from the 4-2-3-1. The true power in this formation is tactical flexibility in that with single swaps of players. Spain under Luis Aragones used this formation to the fullest in the final of 2008 Euro to contain a powerful German side.",
          es: "La formación 4-1-4-1 proviene del 4-3-3 o del 4-2-3-1. El verdadero poder en esta formación es la flexibilidad táctica en eso con intercambios únicos de jugadores. España bajo Luis Aragones utilizó esta formación al máximo en la final del Euro 2008 para contener un poderoso equipo alemán.",
          fr: "La formation 4-1-4-1 provient soit du 4-3-3, soit du 4-2-3-1. Le vrai pouvoir de cette formation est la flexibilité tactique, qui consiste en des échanges uniques de joueurs. L'Espagne sous Luis Aragones a utilisé au maximum cette formation lors de la finale de l'Euro 2008 pour contenir une puissante équipe allemande."
        }
      } else if (formation_id == "4-2-3-1") {
        var description = {
          en: "The 4-2-3-1 Formation featured heavily throughout the 2010 FIFA World Cup and the EURO 2012, beautifully combining the attacking potential with a defensive cohesion. The comparative examples are like Jose Mourinho's Real Madrid and Joachim Low's Germany.",
          es: "La formación 4-2-3-1 tuvo una gran presencia durante la Copa Mundial de la FIFA 2010 y la EURO 2012, combinando maravillosamente el potencial de ataque con una cohesión defensiva. Los ejemplos comparativos son como el Real Madrid de José Mourinho y la Alemania de Joachim Low.",
          fr: "La formation 4-2-3-1 a été très présente tout au long de la Coupe du Monde de la FIFA 2010 et de l'EURO 2012, alliant à la perfection le potentiel offensif à une cohésion défensive. Les exemples comparatifs ressemblent au Real Madrid de Jose Mourinho et à l'Allemagne de Joachim Low."
        }
      } else if (formation_id == "4-1-3-2") {
        var description = {
          en: "The 4-1-3-2 is probably one of the most widely used formations in professional football with relatively four in the back , a double pivot in front, three in the midfield and a typical centre forward. This system was followed by Borussia Dortmund under Jurgen Klopp.",
          es: "El 4-1-3-2 es probablemente una de las formaciones más utilizadas en el fútbol profesional con relativamente cuatro en la espalda, un doble pivote en el frente, tres en el medio campo y un típico centro delantero. Este sistema fue seguido por Borussia Dortmund bajo Jurgen Klopp.",
          fr: "Le 4-1-3-2 est probablement l'une des formations les plus largement utilisées dans le football professionnel avec relativement quatre à l'arrière, un double pivot à l'avant, trois au centre et un centre-centre typique. Ce système a été suivi par le Borussia Dortmund sous Jurgen Klopp."
        }
      } else if (formation_id == "4-3-3") {
        var description = {
          en: "The 4-3-3 Formation is turning out to be one of the most aggressive and effective formation in modern football. The versatile nature of the formation makes it as a  preferable choice for many coaches including Fernando Santos's Greece and Pep Guardiola's Barcelona.",
          es: "La Formación 4-3-3 se está convirtiendo en una de las formaciones más agresivas y efectivas en el fútbol moderno. La naturaleza versátil de la formación la convierte en una opción preferible para muchos entrenadores, incluidos Grecia de Fernando Santos y Barcelona de Pep Guardiola.",
          fr: "La formation 4-3-3 s’avère être l’une des formations les plus agressives et les plus efficaces du football moderne. La nature polyvalente de la formation en fait un choix préférable pour de nombreux entraîneurs, notamment la Grèce de Fernando Santos et le Barcelone de Pep Guardiola."
        }
      } else if (formation_id == "4-4-1-1") {
        var description = {
          en: "The 4-4-1-1 Formation retains the similar shape of 4-4-2, missing out on one aspect- a recognised striker. With the lights of a creator along with a pure striker, the 4-4-1-1 Formation is favoured by many. David Moyes's Everton is a genuine example.",
          es: "La Formación 4-4-1-1 conserva la forma similar de 4-4-2, perdiendo un aspecto: un delantero reconocido. Con las luces de un creador junto con un delantero puro, la Formación 4-4-1-1 es favorecida por muchos. El Everton de David Moyes es un ejemplo genuino.",
          fr: "La formation 4-4-1-1 conserve la forme similaire du 4-4-2, en manquant un aspect: un attaquant reconnu. Avec les lumières d'un créateur avec un pur attaquant, la Formation 4-4-1-1 est favorisée par beaucoup. Everton de David Moyes est un exemple authentique."
        }
      } else if (formation_id == "4-3-1-2") {
        var description = {
          en: "The 4-3-1-2 Formation comes up with an attacking mode of display. The wingbacks should be relentlessly going forward, the midfielders usually makes a triangle with one of them sinking deep. Zinedine Zidane’s Real Madrid has been one of the most successful sides in UCL with this tactic.",
          es: "La formación 4-3-1-2 presenta un modo de visualización de ataque. Los laterales deberían avanzar sin descanso, los centrocampistas generalmente hacen un triángulo con uno de ellos hundiéndose profundamente. El Real Madrid de Zinedine Zidane ha sido uno de los equipos más exitosos en UCL con esta táctica.",
          fr: "Le 4-3-1-2 Formation propose un mode d’affichage offensif. Les ailerons devraient évoluer sans relâche, les milieux de terrain forment généralement un triangle dont l'un s'enfonce profondément. Le Real Madrid de Zinedine Zidane a été l’une des équipes les plus réussies de l’UCL avec cette tactique."
        }
      }
  
      return description
    },
    league({league_id}) {
      if (league_id == 4) {
        var description = {
          en: "FIFA World Cup 2018 Russia.",
          es: "Copa Mundial de la FIFA Rusia 2018.",
          fr: "Coupe du monde FIFA 2018 Russie."
        }
      } else if (league_id == 21) {
        var description = {
          en: "Create your Fantasy Team for the top domestic league in Italy.",
          es: "Crea tu equipo de fantasía para la liga nacional más importante de Italia.",
          fr: "Créez votre équipe Fantasy pour la meilleure ligue nationale en Italie."
        }
      } else if (league_id == 22) {
        var description = {
          en: "Create your Fantasy Team for the top domestic league in Germany.",
          es: "Crea tu equipo de fantasía para la liga nacional más importante de Alemania.",
          fr: "Créez votre équipe Fantasy pour la meilleure ligue nationale en Allemagne."
        }
      } else if (league_id == 23) {
        var description = {
          en: "Create your Fantasy Team for the top domestic league in Spain.",
          es: "Crea tu equipo de fantasía para la liga nacional más importante de España.",
          fr: "Créez votre équipe Fantasy pour la meilleure ligue nationale en Espagne."
        }
      } else if (league_id == 24) {
        var description = {
          en: "Create your Fantasy Team for the top domestic league in France.",
          es: "Crea tu equipo de fantasía para la liga nacional más importante de Francia.",
          fr: "Créez votre équipe Fantasy pour la meilleure ligue nationale en France."
        }
      } else if (league_id == 5) {
        var description = {
          en: "Create your Fantasy Team for the best knockout tournament in Europe.",
          es: "Crea tu equipo de fantasía para el mejor torneo eliminatorio de Europa.",
          fr: "Créez votre équipe Fantasy pour le meilleur tournoi à élimination directe en Europe."
        }
      } else if (league_id == 999) {
        var description = {
          en: "Create your Fantasy Team for the best knockout tournament in Europe.",
          es: "Crea tu equipo de fantasía para el mejor torneo eliminatorio de Europa.",
          fr: "Créez votre équipe Fantasy pour le meilleur tournoi à élimination directe en Europe."
        }
      } else if (league_id == 8) {
        var description = {
          en: "Create your Fantasy Team for the top domestic league in England.",
          es: "Crea tu equipo de fantasía para la mejor liga nacional de Inglaterra.",
          fr: "Créez votre équipe Fantasy pour la meilleure ligue nationale en Angleterre."
        }
      } else if (league_id == 998) {
        var description = {
          en: "This tournament is based on Daily Fantasy Sports. Play daily and win.",
          es: "Este torneo se basa en Daily Fantasy Sports. Juega a diario y gana.",
          fr: "Ce tournoi est basé sur Daily Fantasy Sports. Jouez tous les jours et gagnez."
        }
      }
  
      return description
    },
    match_postpone() {
      const match_postpone = {
        en: "The match has been postponed.",
        es: "El partido ha sido pospuesto.",
        fr: "Le match a été reporté."
      }
      return match_postpone
    },
    prizes_not_found() {
      const prizes_not_found = {
        en: "No prizes found for current user !!",
        es: "¡No se encontraron premios para el usuario actual!",
        fr: "Aucun prix trouvé pour l'utilisateur actuel !!"
      }
      return prizes_not_found
    },
    prizezone_not_found() {
      const prizezone_not_found = {
        en: "No prize zone is found for current user !!",
        es: "¡No se encuentra zona de premios para el usuario actual!",
        fr: "Aucune zone de prix n'est trouvée pour l'utilisateur actuel !!"
      }
      return prizezone_not_found
    },
    subscription_header_text() {
      const subscription_header_text = {
        en: "subscribe and win exciting prizes",
        es: "suscríbete y gana premios emocionantes",
        fr: "abonnez-vous et gagnez des prix excitants"
      }
      return subscription_header_text
    },
    subscription_footer_text({amount, billing_days}) {
      if (billing_days == 7) {
        billing_duration_text_en = "per week"
        billing_duration_text_es = "por semana"
        billing_duration_text_fr = "par semaine"
      } else if (billing_days == 30) {
        billing_duration_text_en = "per month"
        billing_duration_text_es = "por mes"
        billing_duration_text_fr = "par mois"
      } else {
        billing_duration_text_en = ""
        billing_duration_text_es = ""
        billing_duration_text_fr = ""
      }
      const subscription_footer_text = {
        en: `then pay ${amount} ${billing_duration_text_en}`,
        es: `luego paga ${amount} ${billing_duration_text_es}`,
        fr: `puis payez ${amount} ${billing_duration_text_fr}`
      }
      return subscription_footer_text
    },
    player_sort_key_name() {
      const player_sort_key_name = {
        en: "Alphabetical",
        es: "Alfabetico",
        fr: "Alphabétique"
      }
      return player_sort_key_name
    },
    player_sort_key_club() {
      const player_sort_key_club = {
        en: "Teams",
        es: "Equipos",
        fr: "Équipes"
      }
      return player_sort_key_club
    },
    player_sort_key_totalprice() {
      const player_sort_key_totalprice = {
        en: "Price",
        es: "Precio",
        fr: "Prix"
      }
      return player_sort_key_totalprice
    },
    player_sort_key_totalpoint() {
      const player_sort_key_totalpoint = {
        en: "Point",
        es: "Punto",
        fr: "Point"
      }
      return player_sort_key_totalpoint
    },
    player_sort_key_lastpoint() {
      const player_sort_key_lastpoint = {
        en: "MatchDay Points",
        es: "Puntos MatchDay",
        fr: "Points MatchDay"
      }
      return player_sort_key_lastpoint
    },
    player_sort_key_lastgamespanpoints() {
      const player_sort_key_lastgamespanpoints = {
        en: "Last MDP",
        es: "Último MDP",
        fr: "Dernier MDP"
      }
      return player_sort_key_lastgamespanpoints
    },
    team_data_not_found() {
      const team_data_not_found = {
        en: "TeamId does not exists",
        es: "TeamId no existe",
        fr: "TeamId n'existe pas"
      }
      return team_data_not_found
    },
    span_details_not_found() {
      const span_details_not_found = {
        en: "Matchday Data not found",
        es: "Datos de la jornada no encontrados",
        fr: "Données de la journée non trouvées"
      }
      return span_details_not_found
    },
    team_reset_failed() {
      const team_reset_failed = {
        en: "Team Reset failed",
        es: "El reinicio del equipo falló",
        fr: "Échec de la réinitialisation de l'équipe"
      }
      return team_reset_failed
    },
    team_creation_failed() {
      const team_creation_failed = {
        en: "Team Creation failed",
        es: "La creación del equipo falló",
        fr: "La création de l'équipe a échoué"
      }
      return team_creation_failed
    },
    player_swap_success() {
      const player_swap_success = {
        en: "Player swap successful",
        es: "Cambio de jugador exitoso",
        fr: "Échange de joueurs réussi"
      }
      return player_swap_success
    },
    leader_not_updated() {
      const leader_not_updated = {
        en: "Leader Edit Failed",
        es: "Edición de líder fallida",
        fr: "Échec de la modification du leader"
      }
      return leader_not_updated
    },
    cannot_swap_in_same_category() {
      const cannot_swap_in_same_category = {
        en: "Please swap within same category",
        es: "Por favor cambie dentro de la misma categoría",
        fr: "Veuillez échanger dans la même catégorie"
      }
      return cannot_swap_in_same_category
    },
    transfer_in_same_category() {
      const transfer_in_same_category = {
        en: "Please transfer within same category",
        es: "Por favor transfiera dentro de la misma categoría",
        fr: "Veuillez transférer dans la même catégorie"
      }
      return transfer_in_same_category
    },
    transfer_update_success() {
      const transfer_update_success = {
        en: "Transfer sucessfully updated",
        es: "Transferencia actualizada correctamente",
        fr: "Transfert mis à jour avec succès"
      }
      return transfer_update_success
    },
    incorrect_budget_from_request() {
      const incorrect_budget_from_request = {
        en: "Incorrect Budget Calculated",
        es: "Presupuesto incorrecto calculado",
        fr: "Budget incorrect calculé"
      }
      return incorrect_budget_from_request
    },
    formation_data_not_found() {
      const formation_data_not_found = {
        en: "No formation data found",
        es: "No se encontraron datos de formación.",
        fr: "Aucune donnée de formation trouvée"
      }
      return formation_data_not_found
    },
    userteam_body_not_found() {
      const userteam_body_not_found = {
        en: "Formation is not selected yet",
        es: "La formación aún no está seleccionada",
        fr: "La formation n'est pas encore sélectionnée"
      }
      return userteam_body_not_found
    },
    cannot_select_players_for_confirmed_team() {
      const cannot_select_players_for_confirmed_team = {
        en: "Cannot select players for confirmed team",
        es: "No se pueden seleccionar jugadores para el equipo confirmado.",
        fr: "Impossible de sélectionner des joueurs pour l'équipe confirmée"
      }
      return cannot_select_players_for_confirmed_team
    },
  }
  